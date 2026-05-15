ServerEvents.recipes(event => {
  const itemsToRemove = [
    // Armor
    'minecraft:chainmail_boots',
    'minecraft:chainmail_chestplate',
    'minecraft:chainmail_helmet',
    'minecraft:chainmail_leggings',
    'minecraft:diamond_boots',
    'minecraft:diamond_chestplate',
    'minecraft:diamond_helmet',
    'minecraft:diamond_leggings',
    'minecraft:golden_boots',
    'minecraft:golden_chestplate',
    'minecraft:golden_helmet',
    'minecraft:golden_leggings',
    'minecraft:iron_boots',
    'minecraft:iron_chestplate',
    'minecraft:iron_helmet',
    'minecraft:iron_leggings',

    // Blocks
    'minecraft:furnace',

    // Utility items
    'minecraft:bucket',
    'minecraft:cauldron',
    'minecraft:shears',
    'minecraft:shield',
    'minecraft:anvil',
    'minecraft:chain',

    // Redstone components
    'minecraft:compass',
    'minecraft:clock',
    'minecraft:piston',
    'minecraft:sticky_piston',
    'minecraft:repeater',
    'minecraft:comparator',

    // Processing items
    'minecraft:paper',
    'minecraft:magma_cream'
  ]

  itemsToRemove.forEach(item => event.remove({ output: item }))
})
