class Contact < ApplicationRecord
  validates :first_name, :last_name presence: true
  validates :email, uniqueness: true
end