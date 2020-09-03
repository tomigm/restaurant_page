const contact = document.createElement("section");
const map = document.createElement("iframe");

map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.987531320238!2d-58.381619860095526!3d-34.60447680158088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1599000302652!5m2!1ses-419!2sar"
map.width="600";
map.height="450";
map.frameborder="0";
map.style="border:0;";
map.allowfullscreen="";
map["aria-hidden"]="false";
map.tabindex="0";

const data = document.createElement("div");
data.classList.add("data")
/*DATA*/

const dataH1 = document.createElement ("h1");
dataH1.innerHTML = 'Contact us!'



const address = document.createElement("div");
address.classList.add('address')
const addressH1 = document.createElement("h2")
addressH1.innerHTML = "Address";
const addressA = document.createElement("a");
addressA.innerHTML = "Street Name 555, Buenos Aires";

address.append(addressH1, addressA);




const openHours = document.createElement("div");
openHours.classList.add('open_hours');

const openHoursH2 = document.createElement("h2");
openHoursH2.innerHTML = "Open Hours";
const openHoursDays = document.createElement("a");
openHoursDays.innerHTML = "Mon-Sat";
const openHoursTime = document.createElement("a");
openHoursTime.innerHTML = "18:00 - 00:00";

openHours.append(openHoursH2, openHoursDays, openHoursTime);


const info = document.createElement('div');
info.classList.add('info')
const infoH2 = document.createElement('h2');
infoH2.innerHTML = "Reach us"
const infoMail = document.createElement('a');
infoMail.innerHTML = 'restaurantname@food.com'
const infoTel = document.createElement('a');
infoTel.innerHTML = "(+54) 11-55555555";

info.append(infoH2, infoMail, infoTel);

/*  */

data.append(info, openHours, address, dataH1);
    



const createContact = () => {
    contact.append(map, data)    
    return contact
}
export default createContact