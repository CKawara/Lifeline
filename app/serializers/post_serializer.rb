class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :hugs, :withYou

  belongs_to :user
  has_many :comments
end
