module.exports = {
  heroes: [
    {
      name: "Warrior King",
      mainAttribute: "strength",
      startingAttributes: [3, 2, 2],
      ranged: false,
      abilities: ["taunt", "reflect", "fury"]
    },
    {
      name: "Centaur Chieftan",
      mainAttribute: "strength",
      startingAttributes: [3, 2, 2],
      ranged: false,
      abilities: ["war stomp"]
    },
    {
      name: "Nebulous One",
      mainAttribute: "strength",
      startingAttributes: [3, 1, 3],
      ranged: false,
      abilities: ["consume", "amporphous", "slime toss"]
    },
    {
      name: "Shadow Assassin",
      mainAttribute: "agility",
      startingAttributes: [2, 2, 1],
      ranged: false,
      abilities: ["shadow walk", "agi punisher", "blink strike"]
    },
    {
      name: "Master of Poisons",
      mainAttribute: "agility",
      startingAttributes: [2, 3, 2],
      ranged: true,
      abilities: ["poisoned blades", "catalyst", "poison bomb"]
    },
    {
      name: "Sorcerer",
      mainAttribute: "intelligence",
      startingAttributes: [1, 2, 4],
      abilities: ["magic missile", "fireblast", "immolate"]
    },
    {
      name: "High Priest",
      mainAttribute: "intelligence",
      startingAttributes: [2, 3, 3],
      abilities: ["healing hands", "stun target", "snare skin"]
    },
    {
      name: "Elder Shaman",
      mainAttribute: "intelligence",
      startingAttributes: [2, 2, 4],
      abilities: ["gift of knowledge", "mana burst", "purge"]
    }
  ],

  gods: [
    {
      name: "Rock Behomoth",
      health: 12,
      immunities: ["magic"],
      abilities: ["stone throw", "explosive death", "tough skin"]
    }
  ],

  abilities: [
    {
      name: "stone throw",
      cooldown: 1,
      damage: 3,
      physical: true,
      active: true,
      targetType: "unit"
    },
    {
      name: "explosive death",
      onDeath: damageEngaged(6)
    },
    { 
      id: "toughSkin",
      name: "Tough Skin",
      onDamageReceived: reduceRangedDamage(2)
    }
  ]
};

