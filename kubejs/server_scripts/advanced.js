ServerEvents.recipes(event => {
  // ========================================
  // SEQUENCED ASSEMBLY - REDSTONE COMPONENTS
  // ========================================

  // Compass
  event.recipes.create.sequenced_assembly([
    'minecraft:compass'
  ], 'create:iron_sheet', [
    event.recipes.create.deploying('create:iron_sheet', ['create:iron_sheet', 'minecraft:redstone']),
    event.recipes.create.pressing('create:iron_sheet', 'create:iron_sheet'),
    event.recipes.create.deploying('create:iron_sheet', ['create:iron_sheet', 'minecraft:iron_ingot'])
  ]).transitionalItem('create:iron_sheet').loops(1)

  // Clock
  event.recipes.create.sequenced_assembly([
    'minecraft:clock'
  ], 'create:golden_sheet', [
    event.recipes.create.deploying('create:golden_sheet', ['create:golden_sheet', 'minecraft:redstone']),
    event.recipes.create.pressing('create:golden_sheet', 'create:golden_sheet'),
    event.recipes.create.deploying('create:golden_sheet', ['create:golden_sheet', 'minecraft:gold_ingot'])
  ]).transitionalItem('create:golden_sheet').loops(1)

  // Piston
  event.recipes.create.sequenced_assembly([
    'minecraft:piston'
  ], 'minecraft:oak_planks', [
    event.recipes.create.deploying('minecraft:oak_planks', ['minecraft:oak_planks', 'create:iron_sheet']),
    event.recipes.create.deploying('minecraft:oak_planks', ['minecraft:oak_planks', 'minecraft:redstone']),
    event.recipes.create.deploying('minecraft:oak_planks', ['minecraft:oak_planks', 'minecraft:cobblestone']),
    event.recipes.create.pressing('minecraft:oak_planks', 'minecraft:oak_planks')
  ]).transitionalItem('minecraft:oak_planks').loops(1)

  // Sticky Piston
  event.recipes.create.sequenced_assembly([
    'minecraft:sticky_piston'
  ], 'minecraft:piston', [
    event.recipes.create.deploying('minecraft:piston', ['minecraft:piston', 'minecraft:slime_ball'])
  ]).transitionalItem('minecraft:piston').loops(1)

  // Repeater
  event.recipes.create.sequenced_assembly([
    'minecraft:repeater'
  ], 'minecraft:stone', [
    event.recipes.create.deploying('minecraft:stone', ['minecraft:stone', 'minecraft:redstone_torch']),
    event.recipes.create.deploying('minecraft:stone', ['minecraft:stone', 'minecraft:redstone']),
    event.recipes.create.pressing('minecraft:stone', 'minecraft:stone')
  ]).transitionalItem('minecraft:stone').loops(1)

  // Comparator
  event.recipes.create.sequenced_assembly([
    'minecraft:comparator'
  ], 'minecraft:stone', [
    event.recipes.create.deploying('minecraft:stone', ['minecraft:stone', 'minecraft:redstone_torch']),
    event.recipes.create.deploying('minecraft:stone', ['minecraft:stone', 'minecraft:quartz']),
    event.recipes.create.deploying('minecraft:stone', ['minecraft:stone', 'minecraft:redstone']),
    event.recipes.create.pressing('minecraft:stone', 'minecraft:stone')
  ]).transitionalItem('minecraft:stone').loops(1)
})
