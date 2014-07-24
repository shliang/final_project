class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :digested_password, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
