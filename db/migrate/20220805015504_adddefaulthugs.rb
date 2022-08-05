class Adddefaulthugs < ActiveRecord::Migration[7.0]
  def change
    change_column :posts, :hugs, :integer,  default: 0
    change_column :posts, :withYou, :integer,  default: 0

  end
end
