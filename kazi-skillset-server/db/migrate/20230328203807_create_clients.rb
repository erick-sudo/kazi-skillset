class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :username
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :phone
      t.string :poster
      t.string :password_digest

      t.timestamps
    end
  end
end
