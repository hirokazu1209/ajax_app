class PostsController < ApplicationController

  # メモを降順で表示
  def index
    @posts = Post.order(id: "DESC")
  end

  # newアクションを定義した（アクションを定義するのみ 処理の記述必要なし）
  # def new
  # end

  def create
    # フォームから送信されたパラメーターを利用して、createメソッドの引数に記述
    Post.create(content: params[:content])
    # メモを保存した後にトップページへリダイレクト
    redirect_to action: :index
  end
 
 end