function Confection(title, weight) {

  this.title = title;
  this.weight = weight;
}

function Chocolate(title, weight, type) {
  Confection.call(this, title, weight);
  this.type = type;

}
Сhocolate.prototype = Object.create(Confection.prototype);
Сhocolate.prototype.constructor = Сhocolate;

function Sweet(title, weight, stuffing) {
  Confection.call(this, title, weight);
  this.stuffing = stuffing;
}

Sweet.prototype = Object.create(Confection.prototype);
Sweet.prototype.constructor = Sweet;

function Lolipop(title, weight, fruityTaste) {
  Confection.call(this, title, weight);
  this.fruityTaste = fruityTaste;
}

Lolipop.prototype = Object.create(Confection.prototype);
Lolipop.prototype.constructor = Lolipop;
const milka = new Сhocolate("Milka", 100, "milky");
const nestle = new Сhocolate("Nestle", 90, "dark");
const mars = new Sweet("Mars", 13, "caramel");
const nuts = new Sweet("Nuts", 13, "caramel", "hazelnut");
const chupaChups = new Lolipop("Chupa-Chups", 1, "apple");
const rooster = new Lolipop("rooster", 1, "orange");
const newYearGift = [milka, nestle, mars, nuts, chupaChups, rooster];

function countWeight(array) {
  let weight = 0;
  for (let value of array) {
    weight += value.weight;
  }

  return weight;
}

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

function searchByName(name, array) {
  let obj = [];
  for (let value of array) {
    if (value.title == name)
      obj.push(value);
  }
  
  return obj;
}

console.log("Новогодний подарок:", newYearGift);
console.log("Вес подарка:", countWeight(newYearGift));
console.log(
  "Новогодний подарок отсортированный по полю:",
  newYearGift.sort(byField("weight"))
);
console.log("Поиск по названию", searchByName("Milka", newYearGift));