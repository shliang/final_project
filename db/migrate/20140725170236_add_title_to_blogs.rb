class AddTitleToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :title, :string
    change_column :blogs, :title, :string, null:false
  end
end
