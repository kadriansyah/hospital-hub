require_dependency 'markazuna/di_container'

class Alo::HospitalsController < ApplicationController
    include Markazuna::INJECT['hospital_service']

    # http://api.rubyonrails.org/classes/ActionController/ParamsWrapper.html
    wrap_parameters :hospital, include: [:id, :name, :description]

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
        hospital_form = Alo::HospitalForm.new(hospital_form_params)
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
        params.require(:hospital).permit(:id, :name, :description)
        # params.require(:core_user).permit! # allow all
    end
end