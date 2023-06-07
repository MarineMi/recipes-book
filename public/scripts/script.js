const btnAdd = document.querySelector(".cars_list");

if (btnAdd) {
  btnAdd.addEventListener("click", async (e) => {
    e.preventDefault();
    const card = e.target.closest(".card");
    const { id } = card.dataset;
    const res = await fetch(`/${id}`, {
      method: "post",
    });
  });
}
