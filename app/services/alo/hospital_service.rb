class Alo::HospitalService
    def create_hospital(hospital_form)
        hospital_form.save
    end

    def update_hospital(hospital_form)
        hospital_form.update
    end

    def delete_hospital(id)
        hospital = find_hospital(id)
        return hospital.delete, Alo::Hospital.page(1).total_pages
    end

    def find_hospital(id)
        Alo::Hospital.find(id)
    end

    def find_hospitals(page = 0)
        return Alo::Hospital.page(page), Alo::Hospital.page(1).total_pages
    end
end
