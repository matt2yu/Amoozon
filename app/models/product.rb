class Product < ApplicationRecord
  validates :name, :description, :category, :price, :keywords, presence: true
  has_many :reviews
  has_one_attached :photo

  # Ruby on Rails ActiveStorage method only (average)
  def average_rating
    reviews.average(:rating)
  end

end