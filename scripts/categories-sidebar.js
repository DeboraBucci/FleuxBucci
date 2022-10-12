const categoriesEl = document.querySelectorAll(".sidebar__item");

const categoriesOptions = {
  all: [
    "SEE ALL",
    "CHAIRS",
    "TABLES",
    "POTS",
    "PAINTS",
    "DECORATION",
    "LIGHTS",
  ],
  kids: ["BEDS", "CRIBS"],
};

const changeArrowDirection = (el, add = "up", remove = "down") => {
  el.classList.add(`fa-chevron-${add}`);
  el.classList.remove(`fa-chevron-${remove}`);
};

categoriesEl.forEach((el) => {
  el.addEventListener("click", (e) => {
    const selectedParent = e.target.closest("li");
    const iconEl = selectedParent
      .querySelector(".sidebar__item")
      .querySelector(".fa-solid");

    if (selectedParent.classList.contains("active-li")) {
      selectedParent.classList.remove("active-li");
      selectedParent.removeChild(document.querySelector(".sidebar__item-list"));
      changeArrowDirection(iconEl, "down", "up");
      return;
    }

    categoriesEl.forEach((item) => {
      const parentLi = item.closest("li");
      parentLi.classList.remove("active-li");
      changeArrowDirection(item.querySelector(".fa-solid"), "down", "up");

      if (parentLi.querySelector(".sidebar__item-list") !== null) {
        parentLi.removeChild(document.querySelector(".sidebar__item-list"));
      }
    });

    selectedParent.classList.add("active-li");
    selectedParent.insertAdjacentHTML(
      "beforeend",
      `<ul class='sidebar__item-list'>${categoriesOptions.all
        .map((opt) => `<li class='sidebar__option'>${opt}</li>`)
        .join("")}</ul>`
    );
    changeArrowDirection(iconEl);

    const optionsEl = selectedParent.querySelectorAll(".sidebar__option");
    optionsEl.forEach((option) =>
      option.addEventListener("click", () => {
        optionsEl.forEach((opt) =>
          opt.classList.remove("sidebar__option--active")
        );
        option.classList.add("sidebar__option--active");
      })
    );
  });
});
