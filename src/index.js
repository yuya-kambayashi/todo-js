import "./styles.css";

const onClickAdd = () => {
  //console.log("onClickAdd");
  const iputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";
  //console.log(div);

  const li = document.createElement("li");
  li.innerText = iputText;

  div.appendChild(li);

  document.getElementById("incomplete-list").appendChild(div);

  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
