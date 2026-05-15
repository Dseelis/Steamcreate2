ServerEvents.recipes(event => {
  const itemsToRemove = [
    'minecraft:chainmail_boots',
    'minecraft:chainmail_chestplate',
    'minecraft:chainmail_helmet',
    'minecraft:chainmail_leggings',
    'minecraft:diamond_boots',
    'minecraft:diamond_chestplate',
    'minecraft:diamond_helmet',
    'minecraft:diamond_leggings',
    'minecraft:gold_boots',
    'minecraft:gold_chestplate',
    'minecraft:gold_helmet',
    'minecraft:gold_leggings',
    'minecraft:iron_boots',
    'minecraft:iron_chestplate',
    'minecraft:iron_helmet',
    'minecraft:iron_leggings',
    'minecraft:furnace'
  ]
  
  itemsToRemove.forEach(item => event.remove({ output: item }))
})
