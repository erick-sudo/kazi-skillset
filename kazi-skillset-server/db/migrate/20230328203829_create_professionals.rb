class CreateProfessionals < ActiveRecord::Migration[7.0]
  def change
    create_table :professionals do |t|
      t.string :username
      t.string :firstname
      t.string :lastname
      t.string :description
      t.string :email
      t.integer :phone
      t.string :poster
      t.integer :category_id
      t.string :portfoliourl
      t.string :location
      t.string :password_digest
      # New Attribute
      t.string :job_title

      t.timestamps
    end
  end
end
