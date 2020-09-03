


const mainContent = document.createElement("section");
mainContent.classList.add("main_content");
const mcH1 = document.createElement("h1");
const mcH2 = document.createElement("h2");
mcH1.textContent = "Chefs Warehouse";
mcH2.textContent = "Your place, our house";

const about = document.createElement("section");
about.classList.add("about");
const aboutH1 = document.createElement("h1");
const aboutP = document.createElement("p");
aboutH1.textContent = "Bongiorno!";
aboutP.textContent  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nulla vitae ut ad. Eveniet soluta necessitatibus facere laborum atque.";




mainContent.append(mcH1, mcH2);

about.append(aboutH1, aboutP);

const main = document.createElement("div");

const createMain = () => {
    main.append(mainContent, about);   
    return main;
};

export default createMain
