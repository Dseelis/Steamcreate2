ServerEvents.recipes(event => {
  // Bucket 
  event.shaped('minecraft:bucket', [
    's s',
    ' s '
  ], {
    s: 'create:iron_sheet'
  })

  // Cauldron 
  event.shaped('minecraft:cauldron', [
    's s',
    's s',
    'sss'
  ], {
    s: 'create:iron_sheet'
  })

  // Shears 
  event.shaped('minecraft:shears', [
    ' s',
    's '
  ], {
    s: 'create:iron_sheet'
  })

  // Shield 
  event.shaped('minecraft:shield', [
    'isi',
    'sss',
    ' s '
  ], {
    i: 'create:iron_sheet',
    s: '#minecraft:planks'
  })

  // Anvil 
  event.shaped('minecraft:anvil', [
    'bbb',
    ' s ',
    'sss'
  ], {
    b: 'minecraft:iron_block',
    s: 'create:iron_sheet'
  })
  // certus quartz 
  event.shaped('ae2:certus_quartz_crystal', [
    "cab",
    "aaa",
    "bac"
  ], {
    a: 'minecraft:quartz',
    c: 'tfmg:nitrate_dust',
    b: 'tfmg:thermite_powder'
  })

  // Chain 
  event.shaped('minecraft:chain', [
    's',
    'n',
    's'
  ], {
    s: 'create:iron_sheet',
    n: 'minecraft:iron_nugget'
  })
})
