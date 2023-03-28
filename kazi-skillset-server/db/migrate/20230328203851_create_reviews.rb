class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :proffesional_id
      t.integer :client_id
      t.string :comment
      t.integer :star_rating

      t.timestamps
    end
  end
end
