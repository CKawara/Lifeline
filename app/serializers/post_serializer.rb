class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :hugs, :withYou, :user_id
end
