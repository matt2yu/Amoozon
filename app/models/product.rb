class Product < ApplicationRecord
  validates :name, :description, :category, :price, :keywords, presence: true

  # has_one_attached :photo

end