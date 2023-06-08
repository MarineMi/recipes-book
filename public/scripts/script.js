const btnAdd = document.querySelector(".cars_list");

if (btnAdd) {
  btnAdd.addEventListener("click", async (e) => {
    e.preventDefault();
    const card = e.target.closest("button.btn-warning");
    const id = card.dataset.id;
    const res = await fetch(`/favorite`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  });
}
