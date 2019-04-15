require 'httparty'

module Markazuna
    class RsApiResources
        def initialize
            @base_uri = ENV['BASE_URI_RS_API']
            @base_dummy_uri = ENV['BASE_DUMMY_URI_DOCTOR_HOSPITAL']
            @headers = {
                "uid"  => ENV['UID_RS_API'],
                "Authorization" => ENV['AUTH_RS_API'],
                "Content-Type" => ENV['CONTENT_TYPE_RS_API']
            }

            ## official
            @list_base_uri = {
                "search_hospital_list"=> "#{@base_uri}/api/v190/hospitals/get_hospital_suggestion.json",
                "search_hospital_detail"=> "#{@base_uri}/api/v190/hospitals/get_detail_hospital.json",
            }
        end

        def get_data(target, data)
            HTTParty.get(@list_base_uri[target], query: data, headers: @headers)
        end

        def post_data(target, data)
            HTTParty.post(@list_base_uri[target], body: data, headers: @headers)
        end
    end
end