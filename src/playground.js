const { Person } = require("./from-scratch");

const mekhi = new Person("Mekhi", 20, ["French Fries", "Chicken Tenders"]);
// console.log(mekhi);
// console.log(mekhi.name);
// console.log(mekhi.age);

mekhi.greet();
console.log(mekhi.friends());
mekhi.favFoods();
console.log(mekhi.addFavFood("Slushies"));
mekhi.favFoods();
console.log(mekhi.makeFriend("joe"));

const egage = new Person("egage :)", 542);
// console.log(egage);
// console.log(egage.name);
// console.log(egage.age);

egage.greet();
console.log(egage.friends());
egage.favFoods();

console.log(egage.makeFriend(mekhi));
console.log(mekhi.makeFriend(egage));
mekhi.friends();
egage.friends();
