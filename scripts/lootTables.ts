import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

export type LootTablePool = {
  entityTypeID: string;
  lootTablePool: string;
};

// Globals

let g_LootTableArray: LootTablePool[] = [];

export function BuildLootTableArray() {
  g_LootTableArray = [
    Allay,
    Armadillo,
    Axolotl,
    Bat,
    Bee,
    Blaze,
    Bogged,
    Breeze,
    Camel,
    Cat,
    CaveSpider,
    Chicken,
    Cod,
    Cow,
    ChargedCreeper,
    Dolphin,
    Donkey,
    Drowned,
    ElderGuardian,
    Enderman,
    Endermmite,
    Evoker,
    Fox,
    Frog,
    Ghast,
    GlowSquid,
    Goat,
    Guardian,
    Hoglin,
    Horse,
    Husk,
    IronGolem,
    Llama,
    MagmaCube,
    Mooshroom,
    Mule,
    Ocelot,
    Panda,
    Parrot,
    Phantom,
    Pig,
    PiglinBrute,
    Pillager,
    PolarBear,
    Pufferfish,
    Rabbit,
    ToastRabbit,
    Ravager,
    Salmon,
    Sheep1,
    Sheep2,
    JebSheep,
    Shulker,
    Silverfish,
    SkeletonHorse,
    Slime,
    Sniffer,
    SnowGolem,
    Spider,
    Squid,
    Stray,
    Strider,
    Tadpole,
    TraderLlama,
    Tropicalfish,
    Turtle,
    Vex,
    Villager1,
    Villager2,
    Vindicator,
    WanderingTrader,
    Warden,
    Witch,
    Wither,
    WitherProjectile,
    Wolf,
    AngryWolf,
    SnowyWolf,
    Zoglin,
    ZombieHorse,
    ZombieVillager1,
    ZombieVillager2,
    ZombiePigman,
  ];
}

export function GetNextPool(): LootTablePool | undefined {
  return g_LootTableArray.shift();
}

const Allay: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Allay,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:allay_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Armadillo: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Armadillo,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:armadillo_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.005 
      }] 
  }`,
};

const Axolotl: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Axolotl,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:lucy_axolotl_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:cyan_axolotl_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      },
      { "type": "item",
        "name": "moremobheads:gold_axolotl_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ]
      },
      { "type": "item",
        "name": "moremobheads:wild_axolotl_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ]
      },
      { "type": "item",
        "name": "moremobheads:blue_axolotl_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "or",
        "conditions": [
          { "condition": "random_chance_with_looting",
            "chance": 0.2,
            "looting_multiplier": 0.01
          },
          { "condition": "has_variant",
            "value": 4
          }]
      }]
  }`,
};

const Bat: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Bat,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:bat_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const Bee: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Bee,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:angry_bee_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "id": "AngryMob"
          },
          { "condition": "bool_property",
            "id": "minecraft:has_nectar",
            "not": true
          }] 
      },
      { "type": "item", 
        "name": "moremobheads:angry_pollinated_bee_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "id": "AngryMob"
          },
          { "condition": "bool_property",
            "id": "minecraft:has_nectar"
          }] 
      },      
      { "type": "item", 
        "name": "moremobheads:pollinated_bee_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "id": "AngryMob",
            "not": true
          },
          { "condition": "bool_property",
            "id": "minecraft:has_nectar"
          }] 
      },            
      { "type": "item", 
        "name": "moremobheads:bee_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "id": "AngryMob",
            "not": true
          },
          { "condition": "bool_property",
            "id": "minecraft:has_nectar",
            "not": true
          }] 
      }], 
    "conditions": [ 
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const Blaze: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Blaze,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:blaze_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.005, 
        "looting_multiplier": 0.0005 
      }] 
  }`,
};

const Bogged: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Bogged,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:bogged_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.06, 
        "looting_multiplier": 0.05 
      }] 
  }`,
};

const Breeze: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Breeze,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:breeze_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.001 
      }] 
  }`,
};

const Camel: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Camel,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:camel_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }] 
  }`,
};

const Cat: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Cat,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [
      { "type": "item", 
        "name": "moremobheads:white_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:tuxedo_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:ginger_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:siamese_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:british_shorthair_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:calico_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 5}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:persian_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 6}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:ragdoll_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 7}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:tabby_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 8}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:black_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 9}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:jellie_cat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 10}
        ] 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.33, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const CaveSpider: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.CaveSpider,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:cave_spider_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.005, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Chicken: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Chicken,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:chicken_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.01, 
        "looting_multiplier": 0.001 
      }] 
  }`,
};

const Cod: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Cod,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:cod_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Cow: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Cow,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:cow_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.01, 
        "looting_multiplier": 0.001 
      }] 
  }`,
};

const ChargedCreeper: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Creeper,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:charged_creeper_head_block", 
        "weight": 1
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "has_component",
        "id": "minecraft:is_charged"
      }] 
  }`,
};

const Dolphin: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Dolphin,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:dolphin_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.33, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const Donkey: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Donkey,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:donkey_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.09 
      }] 
  }`,
};

const Drowned: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Drowned,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:drowned_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.05, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const ElderGuardian: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.ElderGuardian,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:elder_guardian_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }] 
  }`,
};

const Enderman: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Enderman,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:enderman_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.005, 
        "looting_multiplier": 0.0001 
      }] 
  }`,
};

const Endermmite: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Endermite,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:endermite_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Evoker: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.EvocationIllager,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:evoker_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.25, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const Fox: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Fox,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:fox_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:snow_fox_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.2,
        "looting_multiplier": 0.004
      }]
  }`,
};

const Frog: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Frog,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:temperate_frog_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:cold_frog_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      },
      { "type": "item",
        "name": "moremobheads:warm_frog_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.2,
        "looting_multiplier": 0.01
      }]
  }`,
};

const Ghast: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Ghast,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:ghast_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.0625, 
        "looting_multiplier": 0.0125 
      }] 
  }`,
};

const GlowSquid: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.GlowSquid,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:glow_squid_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.05, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Goat: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Goat,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:goat_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:screaming_goat_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "or",
        "conditions": [
          { "condition": "random_chance_with_looting",
            "chance": 0.01,
            "looting_multiplier": 0.001
          },
          { "condition": "has_variant",
            "value": 1
          }]
      }]
  }`,
};

const Guardian: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Guardian,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:guardian_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.005, 
        "looting_multiplier": 0.001 
      }] 
  }`,
};

const Hoglin: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Hoglin,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:hoglin_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.03, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const Horse: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Horse,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:white_horse_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:creamy_horse_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      },
      { "type": "item",
        "name": "moremobheads:chestnut_horse_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ]
      },
      { "type": "item",
        "name": "moremobheads:brown_horse_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ]
      },
      { "type": "item",
        "name": "moremobheads:black_horse_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4}
        ]
      },
      { "type": "item",
        "name": "moremobheads:gray_horse_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 5}
        ]
      },
      { "type": "item",
        "name": "moremobheads:dark_brown_horse_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 6}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.27,
        "looting_multiplier": 0.01
      }]
  }`,
};

const Husk: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Husk,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:husk_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.06, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

/* Illusioner
// The Illusioner doesn't exist in Bedrock!!
const Illusioner: LootTablePool = {
  entityTypeID: MinecraftEntityTypes...,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:illusioner_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.25, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};
*/

const IronGolem: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.IronGolem,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:iron_golem_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.05, 
        "looting_multiplier": 0.015 
      }] 
  }`,
};

const Llama: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Llama,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:creamy_llama_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:white_llama_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      },
      { "type": "item",
        "name": "moremobheads:brown_llama_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ]
      },
      { "type": "item",
        "name": "moremobheads:gray_llama_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.24,
        "looting_multiplier": 0.02
      }]
  }`,
};

const MagmaCube: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.MagmaCube,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:magma_cube_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.005, 
        "looting_multiplier": 0.001 
      }] 
  }`,
};

const Mooshroom: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Mooshroom,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:red_mooshroom_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:brown_mooshroom_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.1,
        "looting_multiplier": 0.001
      }]
  }`,
};

const Mule: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Mule,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:mule_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.05 
      }] 
  }`,
};

const Ocelot: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Ocelot,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:ocelot_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const Panda: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Panda,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:panda_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:lazy_panda_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      },
      { "type": "item",
        "name": "moremobheads:worried_panda_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ]
      },
      { "type": "item",
        "name": "moremobheads:playful_panda_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ]
      },
      { "type": "item",
        "name": "moremobheads:brown_panda_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4}
        ]
      },
      { "type": "item",
        "name": "moremobheads:weak_panda_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 5}
        ]
      },
      { "type": "item",
        "name": "moremobheads:aggressive_panda_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 6}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.27,
        "looting_multiplier": 0.004
      }]
  }`,
};

const Parrot: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Parrot,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:red_parrot_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:blue_parrot_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      },
      { "type": "item",
        "name": "moremobheads:green_parrot_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ]
      },
      { "type": "item",
        "name": "moremobheads:light_blue_parrot_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ]
      },
      { "type": "item",
        "name": "moremobheads:gray_parrot_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.25,
        "looting_multiplier": 0.02
      }]
  }`,
};

const Phantom: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Phantom,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:phantom_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Pig: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Pig,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:pig_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.01, 
        "looting_multiplier": 0.001 
      }] 
  }`,
};

const PiglinBrute: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.PiglinBrute,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:piglin_brute_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Pillager: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Pillager,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:pillager_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.025, 
        "looting_multiplier": 0.005 
      }] 
  }`,
};

const PolarBear: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.PolarBear,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:polar_bear_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.05 
      }] 
  }`,
};

const Pufferfish: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Pufferfish,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:pufferfish_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.15, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Rabbit: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Rabbit,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:brown_rabbit_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:white_rabbit_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      },
      { "type": "item",
        "name": "moremobheads:black_rabbit_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ]
      },
      { "type": "item",
        "name": "moremobheads:black_and_white_rabbit_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ]
      },
      { "type": "item",
        "name": "moremobheads:gold_rabbit_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4}
        ]
      },
      { "type": "item",
        "name": "moremobheads:salt_and_pepper_rabbit_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 5}
        ]
      },
      { "type": "item",
        "name": "moremobheads:the_killer_bunny_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 99}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "is_named",
        "operator": "!=",
        "id": "Toast"},
      { "condition": "or",
        "conditions": [
          { "condition": "random_chance_with_looting",
            "chance": 0.26,
            "looting_multiplier": 0.05
          },
          { "condition": "has_variant",
            "value": 99
          }]
      }]
  }`,
};

const ToastRabbit: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Rabbit,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:toast_head_block", 
        "weight": 1
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "is_named",
        "id": "Toast"
      }]
  }`,
};

const Ravager: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Ravager,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:ravager_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.25, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const Salmon: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Salmon,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:salmon_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Sheep1: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Sheep,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:white_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 0}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:orange_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 1}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:magenta_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 2}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:light_blue_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 3}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:yellow_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 4}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:lime_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 5}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:pink_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 6}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:gray_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 7}
        ] 
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.0175,
        "looting_multiplier": 0.0025
      },
      { "condition": "is_named",
        "operator": "!=",
        "id": "jeb_"
      },
      { "condition": "color_component",
        "operator": "<=",
        "value": 7
      }]
  }`,
};

const Sheep2: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Sheep,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:light_gray_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 8}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:cyan_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 9}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:purple_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 10}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:blue_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 11}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:brown_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 12}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:green_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 13}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:red_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 14}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:black_sheep_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "color_component",
            "value": 15}
        ] 
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.0175,
        "looting_multiplier": 0.0025
      },
      { "condition": "is_named",
        "operator": "!=",
        "id": "jeb_"
      },
      { "condition": "color_component",
        "operator": ">=",
        "value": 8
      }]
  }`,
};

const JebSheep: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Sheep,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:jeb__sheep_head_block", 
        "weight": 1
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "is_named",
        "id": "jeb_"
      }]
  }`,
};

const Shulker: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Shulker,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:shulker_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.05, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Silverfish: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Silverfish,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:silverfish_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.05, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const SkeletonHorse: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.SkeletonHorse,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:skeleton_horse_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.05 
      }] 
  }`,
};

const Slime: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Slime,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:slime_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.025, 
        "looting_multiplier": 0.02 
      }] 
  }`,
};

const Sniffer: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Sniffer,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:sniffer_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }] 
  }`,
};

const SnowGolem: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.SnowGolem,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:snow_golemn_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.05, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Spider: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Spider,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:spider_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.005, 
        "looting_multiplier": 0.001 
      }] 
  }`,
};

const Squid: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Squid,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:squid_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.05, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Stray: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Stray,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:stray_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.06, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Strider: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Strider,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:cold_strider_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "id": "ShakingMob" }
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:strider_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "not": true,
            "id": "ShakingMob" }
        ] 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.05 
      }] 
  }`,
};

const Tadpole: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Tadpole,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:tadpole_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const TraderLlama: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.TraderLlama,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:creamy_llama_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item",
        "name": "moremobheads:white_llama_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ]
      },
      { "type": "item",
        "name": "moremobheads:brown_llama_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ]
      },
      { "type": "item",
        "name": "moremobheads:gray_llama_head_block",
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ]
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "random_chance_with_looting",
        "chance": 0.24,
        "looting_multiplier": 0.07
      }]
  }`,
};

const Tropicalfish: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Tropicalfish,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:tropical_fish_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Turtle: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Turtle,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:turtle_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.1, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Vex: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Vex,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:ambient_vex_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "not": true,
            "id": "IsCharging"
          }] 
      },
      { "type": "item", 
        "name": "moremobheads:charge_vex_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "id": "IsCharging"
          }] 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.91, 
        "looting_multiplier": 0.01 
      }] 
  }`,
};

const Villager1: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.VillagerV2,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:farmer_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:fisherman_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:shepherd_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:fletcher_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:librarian_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 5}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:cartographer_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 6}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:cleric_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 7}
        ] 
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "has_variant",
        "operator": "<=",
        "value": 7
      }]
  }`,
};

const Villager2: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.VillagerV2,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:armorer_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 8}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:weaponsmith_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 9}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:toolsmith_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 10}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:butcher_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 11}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:leatherworker_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 12}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:mason_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 13}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:nitwit_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 14}
        ] 
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "has_variant",
        "operator": ">=",
        "value": 8
      }]
  }`,
};

const Vindicator: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Vindicator,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:vindicator_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.05, 
        "looting_multiplier": 0.015 
      }] 
  }`,
};

const WanderingTrader: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.WanderingTrader,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:wandering_trader_head_block", 
        "weight": 1 
      }], 
    "conditions": [{ "condition": "killed_by_player" }]
  }`,
};

const Warden: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Warden,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:warden_head_block", 
        "weight": 1 
      }], 
    "conditions": [{ "condition": "killed_by_player" }]
  }`,
};

const Witch: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Witch,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:witch_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.005, 
        "looting_multiplier": 0.001 
      }] 
  }`,
};

const Wither: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Wither,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:wither_head_block", 
        "weight": 1 
      }], 
    "conditions": [{ "condition": "killed_by_player" }]
  }`,
};

const WitherProjectile: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Wither,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:wither_projectile_head_block", 
        "weight": 1 
      },
      { "type": "item", 
        "name": "moremobheads:blue_wither_projectile_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance", 
        "chance": 0.5
      }] 
  }`,
};

const Wolf: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Wolf,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0
          }]
      },
      { "type": "item", 
        "name": "moremobheads:ashen_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1
          }]
      },
      { "type": "item", 
        "name": "moremobheads:black_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2
          }]
      },
      { "type": "item", 
        "name": "moremobheads:chestnut_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3
          }]
      },
      { "type": "item", 
        "name": "moremobheads:rusty_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4
          }]
      },
      { "type": "item", 
        "name": "moremobheads:spotty_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 6
          }]
      },
      { "type": "item", 
        "name": "moremobheads:striped_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 7
          }]
      },
      { "type": "item", 
        "name": "moremobheads:woods_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 8
          }]
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" },
      { "condition": "has_tag",
        "id": "AngryMob",
        "not": true
      }, 
      { "condition": "has_variant",
        "value": 5,
        "not": true
      },
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.01
      }] 
  }`,
};

const AngryWolf: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Wolf,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:angry_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0
          }]
      },
      { "type": "item", 
        "name": "moremobheads:angry_ashen_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1
          }]
      },
      { "type": "item", 
        "name": "moremobheads:angry_black_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2
          }]
      },
      { "type": "item", 
        "name": "moremobheads:angry_chestnut_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3
          }]
      },
      { "type": "item", 
        "name": "moremobheads:angry_rusty_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4
          }]
      },
      { "type": "item", 
        "name": "moremobheads:angry_spotty_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 6
          }]
      },
      { "type": "item", 
        "name": "moremobheads:angry_striped_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 7
          }]
      },
      { "type": "item", 
        "name": "moremobheads:angry_woods_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 8
          }]
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" },
      { "condition": "has_tag",
        "id": "AngryMob"
      }, 
      { "condition": "has_variant",
        "value": 5,
        "not": true
      },
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.01
      }] 
  }`,
};

const SnowyWolf: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Wolf,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:snowy_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "id": "AngryMob",
            "not": true
          }]
      },
      { "type": "item", 
        "name": "moremobheads:angry_snowy_wolf_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_tag",
            "id": "AngryMob"
          }]
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" },
      { "condition": "has_variant",
            "value": 5}, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.5, 
        "looting_multiplier": 0.1
      }] 
  }`,
};

const Zoglin: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.Zoglin,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:zoglin_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.2, 
        "looting_multiplier": 0.05 
      }] 
  }`,
};

const ZombieHorse: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.ZombieHorse,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:zombie_horse_head_block", 
        "weight": 1 
      }], 
    "conditions": [{ "condition": "killed_by_player" }]
  }`,
};

const ZombieVillager1: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.ZombieVillagerV2,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:zombie_villager_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 0}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_farmer_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 1}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_fisherman_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 2}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_shepherd_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 3}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_fletcher_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 4}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_librarian_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 5}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_cartographer_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 6}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_cleric_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 7}
        ] 
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "has_variant",
        "operator": "<=",
        "value": 7
      },
      { "condition": "random_chance_with_looting", 
        "chance": 0.5, 
        "looting_multiplier": 0.02 
      }]
  }`,
};

const ZombieVillager2: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.ZombieVillagerV2,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:zombie_armorer_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 8}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_weaponsmith_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 9}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_toolsmith_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 10}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_butcher_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 11}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_leatherworker_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 12}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_mason_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 13}
        ] 
      },
      { "type": "item", 
        "name": "moremobheads:zombie_nitwit_head_block", 
        "weight": 1,
        "conditions": [
          { "condition": "has_variant",
            "value": 14}
        ] 
      }], 
    "conditions": [
      { "condition": "killed_by_player" },
      { "condition": "has_variant",
        "operator": ">=",
        "value": 8
      },
      { "condition": "random_chance_with_looting", 
        "chance": 0.5, 
        "looting_multiplier": 0.02 
      }]
  }`,
};

const ZombiePigman: LootTablePool = {
  entityTypeID: MinecraftEntityTypes.ZombiePigman,
  lootTablePool: `
  { 
    "rolls": 1, 
    "entries": [ 
      { "type": "item", 
        "name": "moremobheads:zombified_piglin_head_block", 
        "weight": 1 
      }], 
    "conditions": [ 
      { "condition": "killed_by_player" }, 
      { "condition": "random_chance_with_looting", 
        "chance": 0.005, 
        "looting_multiplier": 0.001 
      }] 
  }`,
};
