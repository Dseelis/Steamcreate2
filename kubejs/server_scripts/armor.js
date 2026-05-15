ServerEvents.recipes(event => {
  // Chainmail Armor
  event.shaped('minecraft:chainmail_boots', [
    'a a',
    'b b'
  ], {
    a: 'minecraft:iron_nugget',
    b: 'minecraft:iron_ingot'
  })

  event.shaped('minecraft:chainmail_chestplate', [
    'a a',
    'bbb',
    'bbb'
  ], {
    a: 'minecraft:iron_nugget',
    b: 'minecraft:iron_ingot'
  })

  event.shaped('minecraft:chainmail_helmet', [
    'bbb',
    'a a'
  ], {
    a: 'minecraft:iron_nugget',
    b: 'minecraft:iron_ingot'
  })

  event.shaped('minecraft:chainmail_leggings', [
    'bbb',
    'a a',
    'b b'
  ], {
    a: 'minecraft:iron_nugget',
    b: 'minecraft:iron_ingot'
  })

  // Diamond Armor
  event.shaped('minecraft:diamond_boots', [
    'a a',
    'b b'
  ], {
    a: 'create:powdered_obsidian',
    b: 'minecraft:diamond'
  })

  event.shaped('minecraft:diamond_chestplate', [
    'a a',
    'bbb',
    'aba'
  ], {
    a: 'create:powdered_obsidian',
    b: 'minecraft:diamond'
  })

  event.shaped('minecraft:diamond_helmet', [
    'bbb',
    'a a'
  ], {
    a: 'create:powdered_obsidian',
    b: 'minecraft:diamond'
  })

  event.shaped('minecraft:diamond_leggings', [
    'bbb',
    'a a',
    'b b'
  ], {
    a: 'create:powdered_obsidian',
    b: 'minecraft:diamond'
  })

  // Gold Armor (renamed to golden in 1.21+)
  event.shaped('minecraft:golden_boots', [
    'a a',
    'b b'
  ], {
    a: 'create:golden_sheet',
    b: 'minecraft:gold_ingot'
  })

  event.shaped('minecraft:golden_chestplate', [
    'a a',
    'bbb',
    'aba'
  ], {
    a: 'create:golden_sheet',
    b: 'minecraft:gold_ingot'
  })

  event.shaped('minecraft:golden_helmet', [
    'bbb',
    'a a'
  ], {
    a: 'create:golden_sheet',
    b: 'minecraft:gold_ingot'
  })

  event.shaped('minecraft:golden_leggings', [
    'bbb',
    'a a',
    'b b'
  ], {
    a: 'create:golden_sheet',
    b: 'minecraft:gold_ingot'
  })

  // Iron Armor
  event.shaped('minecraft:iron_boots', [
    'a a',
    'b b'
  ], {
    a: 'create:iron_sheet',
    b: 'minecraft:iron_ingot'
  })

  event.shaped('minecraft:iron_chestplate', [
    'a a',
    'bbb',
    'aba'
  ], {
    a: 'create:iron_sheet',
    b: 'minecraft:iron_ingot'
  })

  event.shaped('minecraft:iron_helmet', [
    'bbb',
    'a a'
  ], {
    a: 'create:iron_sheet',
    b: 'minecraft:iron_ingot'
  })

  event.shaped('minecraft:iron_leggings', [
    'bbb',
    'a a',
    'b b'
  ], {
    a: 'create:iron_sheet',
    b: 'minecraft:iron_ingot'
  })
})
