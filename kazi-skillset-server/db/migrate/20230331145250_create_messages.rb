class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.integer :client_id
      t.integer :professional_id
      t.string :content
      t.integer :owner

      t.timestamps
    end
  end
end