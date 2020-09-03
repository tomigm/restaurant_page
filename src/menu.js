const menu = document.createElement("section");
menu.classList.add("menu");
let menuCol




function foodCards() {

    let foodList = ['Poached Garlic & Ginger Pork',
        'Seared Coconut Boar',
        'Smoked Chili Snapper',
        'Barbecued Basil & Clove Frog',
        'Braised Saffron Taco',
        'Brined Herbs & Linguine',
        'Pistachio and Ginger Snacks',
        'Peach and Cocoa Candy',
        'Rum Mooncake',
        'Pineapple Toast',
        'Seared Vanilla Mammoth',
        'Marinated Western-Style Rabbit',
        'Brined Mushroom & Garlic Alligator',
        'Infused Mushroom & Apricot Trout',
        'Marinated Herbs & Bake',
        'Stuffed Watercress Spring Greens',
        'Red Wine and Melon Delight',
        'Red Wine and Cherry Roll',
        'Cocoa Pavlova',
        'Cherry Strudel',
    
    ]

    const foodCard = document.createElement("div");
    foodCard.classList.add("food_card");
    const food = document.createElement("div");
    food.classList.add("food");

    const foodName = document.createElement("h1");
    const foodDesc = document.createElement("a");
    const foodPrice = document.createElement('a')
    foodPrice.classList.add("price");
    foodName.innerHTML = foodList[Math.floor(Math.random() * 20)];
    foodDesc.innerHTML = "Food interesting description";
    foodPrice.innerHTML = Math.floor(Math.random() * 20) + 1;

    food.append(foodName, foodDesc);
    foodCard.append(food, foodPrice);

    return foodCard

}


function createColumns() {
    menuCol = document.createElement("div");
    menuCol.classList.add("menu_col");
    menu.appendChild(menuCol);

for (let i=0; i < 4; i++) {
    menuCol.appendChild(foodCards())
}

}

const createMenu = () => {
    for (let i=0; i<2; i++){
       createColumns();
    }
    return menu
}

export default createMenu