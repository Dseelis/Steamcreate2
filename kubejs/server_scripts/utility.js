ServerEvents.recipes(event => {
  // Bucket - uses iron sheets instead of ingots
  event.shaped('minecraft:bucket', [
    's s',
    ' s '
  ], {
    s: 'create:iron_sheet'
  })

  // Cauldron - uses iron sheets
  event.shaped('minecraft:cauldron', [
    's s',
    's s',
    'sss'
  ], {
    s: 'create:iron_sheet'
  })

  // Shears - uses iron sheets
  event.shaped('minecraft:shears', [
    ' s',
    's '
  ], {
    s: 'create:iron_sheet'
  })

  // Shield - iron sheets + planks
  event.shaped('minecraft:shield', [
    'isi',
    'sss',
    ' s '
  ], {
    i: 'create:iron_sheet',
    s: '#minecraft:planks'
  })

  // Anvil - iron blocks + iron sheets
  event.shaped('minecraft:anvil', [
    'bbb',
    ' s ',
    'sss'
  ], {
    b: 'minecraft:iron_block',
    s: 'create:iron_sheet'
  })

  // Chain - iron sheets + nuggets
  event.shaped('minecraft:chain', [
    's',
    'n',
    's'
  ], {
    s: 'create:iron_sheet',
    n: 'minecraft:iron_nugget'
  })
})
