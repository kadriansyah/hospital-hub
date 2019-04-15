
class Alo::HospitalForm
    include ActiveModel::Model

    attr_accessor(:id, :ref_id, :name, :address, :email)

    # Validations
    validates :ref_id, presence: true
    validates :name, presence: true
    validates :address, presence: true
    validates :email, presence: true

    def save
        if valid?
            hospital = Alo::Hospital.new(ref_id: self.ref_id, name: self.name, address: self.address)
            hospital.save
            true
        else
            false
        end
    end

    def update
        if valid?
            hospital = Alo::Hospital.find(self.id)
            hospital.update_attributes!(ref_id: self.ref_id, name: self.name, address: self.address)
            true
        else
            false
        end
    end
end
