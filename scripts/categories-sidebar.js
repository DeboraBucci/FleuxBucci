const categoriesEl = document.querySelectorAll(".sidebar__item");

// OPEN AND CLOSE ITEMS
categoriesEl.forEach((el) => {
  el.addEventListener("click", (e) => {
    const allItemEl = categoriesEl;
    const selectedParent = e.target.closest("li");

    if (selectedParent.classList.contains("active-li")) {
      selectedParent.classList.remove("active-li");
      return;
    }

    allItemEl.forEach((item) => {
      item.closest("li").classList.remove("active-li");
    });
    selectedParent.classList.add("active-li");
  });
});
