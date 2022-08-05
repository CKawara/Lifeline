class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :number, :password_digest

  has_many :posts
end
