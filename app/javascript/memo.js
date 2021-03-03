const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html
}

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
    // レスポンスの受信に成功したときの処理
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }      
      const list = document.getElementById("list");
      // リセットの対象となるフォームの要素contentを取得
      const formText = document.getElementById("content");      
      list.insertAdjacentHTML("afterend", buildHTML(XHR)); 
      formText.value = "";             
    };
  });
}

window.addEventListener('load', post);