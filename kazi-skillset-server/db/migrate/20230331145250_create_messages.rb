class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :client_id
      t.string :professional_id
      t.string :content

      t.timestamps
    end
  end
end
