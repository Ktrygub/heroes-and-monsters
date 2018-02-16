const persistedStateDatabase = {
  // game: {
  //   hero: {
  //     name: 'test',
  //     gender: 'male',
  //     heroClass: 'frontend'
  //   },
  // },
  database: {
    heroClasses: {
      Warrior: {
        life: 30,
        damage: 4
      },
      Archer: {
        life: 15,
        damage: 10
      },
      Mage: {
        life: 25,
        damage: 8
      },
      Gladiator: {
        life: 44,
        damage: 8
      },
      Sorcerer: {
        life: 25,
        damage: 7
      },
      Necromancer: {
        life: 20,
        damage: 8
      }
    },
    monsterClasses: {
      Zombie: {
        life: 8,
        damage: 4
      },
      Spider: {
        life: 3,
        damage: 1
      },
      Snake: {
        life: 9,
        damage: 3
      },
      Scorpion: {
        life: 5,
        damage: 2
      },
      Imp: {
        life: 4,
        damage: 2
      },
      Ghost: {
        life: 9,
        damage: 4
      },
      Bat: {
        life: 6,
        damage: 6
      },
      Hydra: {
        life: 22,
        damage: 6
      },
      Dragon: {
        life: 38,
        damage: 8
      },
      SkeletonKing: {
        life: 44,
        damage: 2
      }
    }
  }
}

export default persistedStateDatabase
