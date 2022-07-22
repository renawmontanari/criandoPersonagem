

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'ataque com ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    build() {
        return 'Construir seu fortres agora!';
    }
}

const legolas = new Elf('Legolas', 'Espada', 'Elfo');
const lurtz = new Ogre('Lurtz', 'Foice', 'Marrom');

console.log(legolas.attack());

console.log(`Meu querido ORC ${lurtz.name} ${lurtz.attack()}`);
console.log(`${lurtz.build()} com a cor ${lurtz.color}`);