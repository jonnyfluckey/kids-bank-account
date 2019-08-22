class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.belongs_to :account, foreign_key: true
      t.datetime :transaction_date
      t.string :description
      t.float :amount
      t.float :balance

      t.timestamps
    end
  end
end
