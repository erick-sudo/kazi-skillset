class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.integer :client_id
      t.integer :proffesional_id
      t.integer :task_id

      t.timestamps
    end
  end
end
