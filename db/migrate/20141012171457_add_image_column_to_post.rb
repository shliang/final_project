class AddImageColumnToPost < ActiveRecord::Migration
  def change
    add_column :posts, :image_url, :string
    change_column :posts, :title, :string
  end
end
