const list = document.querySelector(".cars_list");
const favorit = document.querySelector(".cars_list");





if (list) {
  list.addEventListener("click", async (e) => {
    
    if (e.target.classList.contains("btn-warning")) {
      console.log("fefref")
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
  });
}
