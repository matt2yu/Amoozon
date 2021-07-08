class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.timestamps
    end
    # Allow one unique review per user
    add_index :reviews, [:user_id, :product_id], unique: true
  end
end