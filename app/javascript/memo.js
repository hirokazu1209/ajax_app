function post (){
  // getElementByIdメソッドで取得した投稿ボタンの要素を変数submitに格納
  const submit = document.getElementById("submit");
  // eはイベントオブジェクトといい、イベント発生時の情報を持ったオブジェクト
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // getElementByIdメソッドで取得したフォームの要素を変数formに格納
    const form = document.getElementById("form")
    // 新たに生成したFormDataオブジェクトを変数formDataに格納
    const formData = new FormData(form);
    // 新たに生成したXMLHttpRequestオブジェクトを変数XHRに格納
    const XHR = new XMLHttpRequest();
    // 第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信であるかをtrueかfalseで記述
    XHR.open("POST", "/posts", true);
    // データフォーマットを「JSON」に指定
    XHR.responseType = "json";
    // フォームに入力された内容をサーバー側に送信
    XHR.send(formData);
  });
}

window.addEventListener('load', post);