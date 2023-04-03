class CreatePendingTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :pending_tasks do |t|
      t.integer :task_id
      t.string :professional_id

      t.timestamps
    end
  end
end
