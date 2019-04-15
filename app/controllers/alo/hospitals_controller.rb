require_dependency 'markazuna/di_container'
require_dependency 'markazuna/rs_api_resources'

class Alo::HospitalsController < ApplicationController
    include Markazuna::INJECT['hospital_service']

    # http://api.rubyonrails.org/classes/ActionController/ParamsWrapper.html
    wrap_parameters :hospital, include: [:ref_id, :email]

    def index
        hospitals, page_count = hospital_service.find_hospitals(params[:page])
        if (hospitals.size > 0)
            respond_to do |format|
                format.json { render :json => { results: hospitals, count: page_count }}
            end
        else
            render :json => { results: []}
        end
    end

    def delete
        status, page_count = hospital_service.delete_hospital(params[:id])
        if status
            respond_to do |format|
                format.json { render :json => { status: "200", count: page_count } }
            end
        else
            respond_to do |format|
                format.json { render :json => { status: "404", message: "Failed" } }
            end
        end
    end

    def create
        # get complete hospital data from RS-API
        api_params = {}
        api_params['id'] = hospital_form_params[:ref_id]
        rs_api_resources = Markazuna::RsApiResources.new
        response = rs_api_resources.get_data('search_hospital_detail', api_params)
        json = JSON.parse(response.body)
        # puts JSON.pretty_generate(json['data'])
        hospital_form = Alo::HospitalForm.new(hospital_form_params)
        hospital_form.ref_id = json['data']['hospital']['id']
        hospital_form.name = json['data']['hospital']['name']
        hospital_form.address = json['data']['hospital']['address']
        if hospital_service.create_hospital(hospital_form)
            respond_to do |format|
                format.json { render :json => { status: "200", message: "Success" } }
            end
        else
            respond_to do |format|
                format.json { render :json => { status: "404", message: "Failed" } }
            end
        end
    end

    def edit
        id = params[:id]
        hospital = hospital_service.find_hospital(id)

        if hospital
            respond_to do |format|
                format.json { render :json => { status: "200", payload: hospital } }
            end
        else
            respond_to do |format|
                format.json { render :json => { status: "404", message: "Failed" } }
            end
        end
    end

    def update
        hospital_form = Alo::HospitalForm.new(hospital_form_params)
        if hospital_service.update_hospital(hospital_form)
            respond_to do |format|
                format.json { render :json => { status: "200", message: "Success" } }
            end
        else
            respond_to do |format|
                format.json { render :json => { status: "404", message: "Failed" } }
            end
        end
    end

    private

    # Using strong parameters
    def hospital_form_params
        params.require(:hospital).permit(:ref_id, :email)
        # params.require(:core_user).permit! # allow all
    end
end