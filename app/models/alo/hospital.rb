require 'markazuna/common_model'

class Alo::Hospital
	include Mongoid::Document
    include Markazuna::CommonModel
    store_in collection: 'hospitals'

    # kaminari page setting
    paginates_per 20

    field :ref_id, type: String, default: ''
    field :name, type: String, default: ''
    field :address, type: String, default: ''
	
end
