ServerEvents.recipes(event => {
  // Furnace
  event.shaped('minecraft:furnace', [
    'bbb',
    'bab',
    'bbb'
  ], {
    a: '#minecraft:coals',
    b: '#c:cobblestones'
  })
})
