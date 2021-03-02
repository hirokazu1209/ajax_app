class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    # 「実際にpostsテーブルを作成する」という仕様がマイグレーションファイルに記載されている
    create_table :posts do |t|
      t.text :content
      t.timestamps
    end
  end
end
