class CreatePaintings < ActiveRecord::Migration[6.0]
  def change
    create_table :paintings do |t|
      t.string :name
      t.text :description
      t.integer :year
      t.string :dimensions
      t.references :theme, null: false, foreign_key: true
      t.boolean :sold
      t.integer :number
      t.integer :priority

      t.timestamps
    end
  end
end
