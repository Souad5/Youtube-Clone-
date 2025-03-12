const button = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => newData(data.categories));
};

const newData = (categories) => {
  const parentsElements = document.getElementById("buttonAll");
for(let cat of categories){
    const addButton = document.createElement("div");
    addButton.innerHTML = `
                  <button class="btn ">${cat.category}</button>
      `
      parentsElements.appendChild(addButton)
}
};

button();
