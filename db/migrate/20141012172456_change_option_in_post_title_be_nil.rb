class ChangeOptionInPostTitleBeNil < ActiveRecord::Migration
  def change
    change_column :posts, :title, :string, null:true
  end
end
