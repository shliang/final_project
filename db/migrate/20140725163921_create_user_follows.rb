class CreateUserFollows < ActiveRecord::Migration
  def change
    create_table :user_follows do |t|
      
      t.timestamps
    end
  end
end
