require 'markazuna/common_model'

class Alo::Hospital
	include Mongoid::Document
    include Markazuna::CommonModel
    store_in collection: 'hospitals'

    # kaminari page setting
    paginates_per 20
	
    field :name, type: String, default: ''
	
    field :description, type: String, default: ''
	
end
