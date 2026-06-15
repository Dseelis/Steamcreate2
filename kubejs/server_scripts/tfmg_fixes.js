ServerEvents.recipes(event => {
  // Fix plastic recipe to use 144mb instead of 200mb
  
  // Remove the old recipe
  event.remove({ output: 'tfmg:plastic_sheet', type: 'tfmg:casting' })
  
  // Add the corrected recipe with the exact structure from the JAR
  event.custom({
    type: 'tfmg:casting',
    ingredients: [
      {
        type: 'neoforge:single',
        fluid: 'tfmg:molten_plastic',
        amount: 144
      }
    ],
    processing_time: 100,
    results: [
      {
        id: 'tfmg:plastic_sheet'
      }
    ]
  })
})