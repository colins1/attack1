import Character from './Character';

export default class Match extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    }
  
  get stoned() {
    return this.stonedOn;
  }

  set stoned(value) {
    if (value == true || value == false) {
      this.stonedOn = value;
    } else {
      throw new Error('баг наложения дурмана');
    }
  }

  get attacks() {
    return this.understatedAttack
  }

  set attacks(x) {
    if (x < 5) {
      if (this.stonedOn) {
        this.understatedAttack = Math.floor((this.attack - Math.log2(x) * 5) * (11 - x) / 10)
      } else {
        this.understatedAttack = Math.floor(this.attack * (11 - x) / 10)
      }
    } else {
      this.understatedAttack = 0
    }
  }
}