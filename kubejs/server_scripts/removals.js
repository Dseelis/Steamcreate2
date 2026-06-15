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

    // items
    'minecraft:bucket',
    'minecraft:cauldron',
    'minecraft:shears',
    'minecraft:shield',
    'ae2:certus_quartz_crystal',
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
    'minecraft:magma_cream',

    // Create Connected Copycats
    'create_connected:copycat_block',
    'create_connected:copycat_slab',
    'create_connected:copycat_beam',
    'create_connected:copycat_vertical_step',
    'create_connected:copycat_stairs',
    'create_connected:copycat_fence',
    'create_connected:copycat_fence_gate',
    'create_connected:copycat_wall',
    'create_connected:copycat_board',
    'create_connected:copycat_box',
    'create_connected:copycat_catwalk'
  ]

  itemsToRemove.forEach(item => event.remove({ output: item }))
})
