class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :number, :password_digest
end
