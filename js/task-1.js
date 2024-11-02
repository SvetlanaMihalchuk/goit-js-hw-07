const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
  const categoriesTitel = item.querySelector("h2").textContent;
  const categoriesItem = item.querySelectorAll("li").length;
  console.log(`Category: ${categoriesTitel}`);
  console.log(`Elements: ${categoriesItem}`);
});
