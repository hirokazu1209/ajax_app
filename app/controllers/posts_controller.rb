class PostsController < ApplicationController

  def index  # indexアクションを定義した
    # @post = "これはコントローラーで定義したインスタンス変数を確認するための文字列です"
    # @post = Post.find(1)  # 1番目のレコードを@postに代入
      @posts = Post.all  # すべてのレコードを@postsに代入
  end

  # newアクションを定義した（アクションを定義するのみ 処理の記述必要なし）
  def new
  end

  def create
    # フォームから送信されたパラメーターを利用して、createメソッドの引数に記述
    Post.create(content: params[:content])
  end
 
 end