class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.integer :client_id
      t.string :description
      t.datetime :start_date
      t.string :location
      t.decimal :budget

      t.timestamps
    end
  end
end
