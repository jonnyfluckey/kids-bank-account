class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :account_name
      t.datetime :date_opened
      t.datetime :date_closed
      t.float :current_balance

      t.timestamps
    end
  end
end
