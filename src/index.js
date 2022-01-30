import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  alert(inputText);
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  //完了　ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // div作成
    const div = document.createElement("div");
    div.className = "list-row";

    // li作成
    const li = document.createElement("li");
    li.innerText = inputText;

    // button作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻る";
    returnButton.addEventListener("click", () => {
      alert();
    });

    document.getElementById("complete-list").appendChild(div);
    div.appendChild(li);
    div.appendChild(returnButton);

    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);
  });

  //削除　ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
