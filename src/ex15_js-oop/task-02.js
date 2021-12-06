class ElectricalAppliances {
  constructor(title, power, switched) {
    this.title = title;
    this.power = power;
    this.switched = false;
  }

  switchOn() {
    this.switched = true;
  }

  switchOff() {
    this.switched = false;
  }
}

class Mixer extends ElectricalAppliances {
  constructor(title, power, switched, turnover) {
    super(title, power, switched);
    this.turnover = turnover;
  }
}

class Television extends ElectricalAppliances {
  constructor(title, power, switched, permission) {
    super(title, power, switched);
    this.permission = permission;
  }
}

class Fridge extends ElectricalAppliances {
  constructor(title, power, switched, capacity) {
    super(title, power, switched);
    this.capacity = capacity;
  }
}

const redmond = new Mixer("Redmond", 180, 12000);
const xiaomi = new Television("Xiaomi", 2000, "1366 x 768");
const novex = new Fridge("Novex", 250, "180л");
redmond.switchOn();
xiaomi.switchOn();
const room = [redmond, xiaomi, novex];

function countPower(array) {
  let power = 0;
  for (let value of array) {
    power += value.power;
  }

  return power;
}

function searchByName(name, array) {
  let obj = [];
  for (let value of array) {
    if (value.title == name) {
      obj.push(value);
    }
  }

  return obj;
}
console.log('Приборы в комнате:', room);
console.log('Потребляемая мощность:', countPower(room));
console.log('Поиск по названию:', searchByName('Novex', room));