const menuItems = [
  {
    image: "img/muffin menu.png",
    title: "Chocolate muffin",
  },

  {
    image: "img/cappuccino.png",
    title: "Cappuccino",
  },

  {
    image: "img/tuna bowl.png",
    title: "Tuna bowl",
  },
  {
    image: "img/danish roll.png",
    title: "Danish roll",
  },
  {
    image: "img/lemon cake.png",
    title: "Lemon cake",
  },
];

let currentItem = 0;

function updateMenu() {
  document.getElementById("menu-image").src = menuItems[currentItem].image;

  document.getElementById("menu-title").textContent =
    menuItems[currentItem].title;
}

function nextItem() {
  currentItem++;

  if (currentItem >= menuItems.length) {
    currentItem = 0;
  }

  updateMenu();
}

function previousItem() {
  currentItem--;

  if (currentItem < 0) {
    currentItem = menuItems.length - 1;
  }

  updateMenu();
}
