
class Alo::HospitalForm
    include ActiveModel::Model

    attr_accessor(:id, :name, :description)

    # Validations
    
    validates :name, presence: true
    
    validates :description, presence: true
    

    def save
        if valid?
            hospital = Alo::Hospital.new(name: self.name, description: self.description)
            hospital.save
            true
        else
            false
        end
    end

    def update
        if valid?
            hospital = Alo::Hospital.find(self.id)
            hospital.update_attributes!(name: self.name, description: self.description)
            true
        else
            false
        end
    end
end
