ServerEvents.recipes(event => {
  // ========================================
  // MIXING RECIPES
  // ========================================

  // Concrete
  const colors = [
    'white', 'orange', 'magenta', 'light_blue',
    'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue',
    'brown', 'green', 'red', 'black'
  ]

  colors.forEach(color => {
    event.recipes.create.mixing(`minecraft:${color}_concrete`, [
      `minecraft:${color}_concrete_powder`,
      Fluid.of('minecraft:water', 250)
    ])
  })

  // Slime balls
  event.recipes.create.mixing('9x minecraft:slime_ball', [
    'minecraft:slime_block'
  ])

  // Magma cream (heated mixing)
  event.recipes.create.mixing('minecraft:magma_cream', [
    'minecraft:slime_ball',
    'minecraft:blaze_powder'
  ]).heated()

  // ========================================
  // PRESSING RECIPES
  // ========================================

  // Paper from sugar cane
  event.recipes.create.pressing('minecraft:paper', 'minecraft:sugar_cane')

  // Leather from rotten flesh
  event.recipes.create.compacting('minecraft:leather', '4x minecraft:rotten_flesh')

  // Note: Packing items like wheat -> wheat block is better done with compacting
  event.recipes.create.compacting('minecraft:hay_block', '9x minecraft:wheat')
  event.recipes.create.compacting('minecraft:dried_kelp_block', '9x minecraft:dried_kelp')

  // ========================================
  // CUTTING RECIPES
  // ========================================

  // Planks (bonus)
  const woodTypes = [
    'oak', 'spruce', 'birch', 'jungle',
    'acacia', 'dark_oak', 'mangrove', 'cherry'
  ]

  woodTypes.forEach(wood => {
    event.recipes.create.cutting(`6x minecraft:${wood}_planks`, Ingredient.of(`#minecraft:${wood}_logs`))
  })

  // Nether wood types
  event.recipes.create.cutting('6x minecraft:crimson_planks', Ingredient.of('#minecraft:crimson_stems'))
  event.recipes.create.cutting('6x minecraft:warped_planks', Ingredient.of('#minecraft:warped_stems'))

  // Stone bricks
  event.recipes.create.cutting('minecraft:stone_bricks', 'minecraft:stone')
  event.recipes.create.cutting('minecraft:chiseled_stone_bricks', 'minecraft:stone_bricks')

  // Carpets from wool (2x carpet per wool)
  colors.forEach(color => {
    event.recipes.create.cutting(`2x minecraft:${color}_carpet`, `minecraft:${color}_wool`)
  })

  // ========================================
  // HAUNTING RECIPES
  // ========================================

  // Soul sand from sand
  event.recipes.create.haunting('minecraft:soul_sand', 'minecraft:sand')

  // Soul soil from dirt
  event.recipes.create.haunting('minecraft:soul_soil', 'minecraft:dirt')

  // Blackstone from cobblestone
  event.recipes.create.haunting('minecraft:blackstone', 'minecraft:cobblestone')

  // Crying obsidian from obsidian
  event.recipes.create.haunting('minecraft:crying_obsidian', 'minecraft:obsidian')

  // ========================================
  // CRUSHING RECIPES
  // ========================================

  // Gravel -> Sand
  event.recipes.create.crushing([
    'minecraft:sand',
    CreateItem.of('minecraft:sand', 0.5)
  ], 'minecraft:gravel')

  // Red Sandstone -> Red Sand
  event.recipes.create.crushing([
    'minecraft:red_sand',
    CreateItem.of('minecraft:red_sand', 0.5)
  ], 'minecraft:red_sandstone')

  // Bone -> Bone Meal
  event.recipes.create.crushing([
    '3x minecraft:bone_meal',
    CreateItem.of('minecraft:bone_meal', 0.5)
  ], 'minecraft:bone')

  // Blaze Rod -> Blaze Powder
  event.recipes.create.crushing([
    '2x minecraft:blaze_powder',
    CreateItem.of('minecraft:blaze_powder', 0.5)
  ], 'minecraft:blaze_rod')

  // Cobblestone -> Gravel
  event.recipes.create.crushing('minecraft:gravel', 'minecraft:cobblestone')

  // Stone -> Cobblestone
  event.recipes.create.crushing('minecraft:cobblestone', 'minecraft:stone')

  // Netherrack -> Nether Wart
  event.recipes.create.crushing([
    CreateItem.of('minecraft:nether_wart', 0.1),
    CreateItem.of('minecraft:netherrack', 0.75)
  ], 'minecraft:netherrack')

  // Glowstone -> Glowstone Dust 
  event.recipes.create.crushing('4x minecraft:glowstone_dust', 'minecraft:glowstone')

  // Prismarine -> Prismarine Shard
  event.recipes.create.crushing([
    '2x minecraft:prismarine_shard',
    CreateItem.of('minecraft:prismarine_shard', 0.5)
  ], 'minecraft:prismarine')

  // ========================================
  // MILLING RECIPES
  // ========================================

  // Sugar Cane -> Sugar
  event.recipes.create.milling('minecraft:sugar', 'minecraft:sugar_cane')

  // Bone -> Bone Meal
  event.recipes.create.milling('2x minecraft:bone_meal', 'minecraft:bone')

  // Wheat -> Seeds 
  event.recipes.create.milling([
    CreateItem.of('minecraft:wheat_seeds', 0.25)
  ], 'minecraft:wheat')

  // Cocoa Beans -> Brown Dye
  event.recipes.create.milling('minecraft:brown_dye', 'minecraft:cocoa_beans')

  // Tall Grass -> Seeds
  event.recipes.create.milling([
    CreateItem.of('minecraft:wheat_seeds', 0.5)
  ], 'minecraft:short_grass')
})
