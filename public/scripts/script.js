const list = document.querySelector(".cars_list");
const favorit = document.querySelector(".cars_list");

if (list) {
  list.addEventListener("click", async (e) => {

    if (e.target.classList.contains("btn-add")) {
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
    }
    if (e.target.classList.contains("btn-delete")) {
      const card = e.target.closest(".card");
      const { id } = card.dataset;
      const res = await fetch(`/favorites/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.message === "success") {
        card.remove();
      } else {
        console.log(data);
        alert(data.message);
      }
    }
  });
}
