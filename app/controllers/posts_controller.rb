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
    # 新たに投稿されたメモの内容を変数postに格納
    post = Post.create(content: params[:content])
    # { post: post }というデータをJSON形式で返却
    render json:{ post: post }
  end
 
 end