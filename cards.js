gods = [
  {
    name: "Rock Behomoth",
    health: 15,
    immunities: ["magic"]
    abilities: ["Stone Throw", "Explosive Death"]
  }
];

abilities = [
  {
    name: "Stone Throw",
    description: "Deal 3 physical damage to target unit."
    cooldown: 1,
    damage: 3,
    type: "physical",
    targer: "unit"
  },
  {
    description: "When the endowed is killed, deal 6 physical damage to any engaged units."
  },
  { 
    description: "When ~ is hit by a ranged attack, the attack's damage is reduced by up to 2."
  }
];
