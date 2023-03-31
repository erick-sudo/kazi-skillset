class AlterProfessionlIdColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :reviews, :professional_id, :job_id
  end
end