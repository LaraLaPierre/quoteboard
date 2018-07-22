class CreateQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :quotes do |t|
      t.string :quote
      t.string :context
      t.string :source
      t.string :theme

      t.timestamps
    end
  end
end
