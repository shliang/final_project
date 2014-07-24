class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.integer :owner_id, null: false
      t.text :content, null: false
      t.timestamps
    end
    add_index :blogs, :owner_id
  end
end