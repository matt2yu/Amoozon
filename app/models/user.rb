class User < ApplicationRecord
  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token
  
  attr_reader :password

  has_many :reviews
  has_many :cart_items
  has_many :products,
    through: :cart_items,
    source: :products


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    pw_obj = BCrypt::Password.new(self.password_digest)
    pw_obj.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
end

private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end