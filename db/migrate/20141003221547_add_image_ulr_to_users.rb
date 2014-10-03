class AddImageUlrToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image_url, :string
    change_column :users, :image_url, :string, null: false 
  end
end
