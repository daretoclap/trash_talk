const express = require('express')
const app = express()
const exphbr = require('express-handlebars')
const Handlebars = require('handlebars')
const port = 3000
const talkTrash = require('./talk_trash.js')

// Set helper
Handlebars.registerHelper('isEqual', function (a, b) {
  console.log('isEqual works if printed') // testing
  console.log(a === b) // testing
  return (a === b)
})

// Set template engine
app.engine('handlebars', exphbr({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Set routes
app.get('/', (req, res) => {
  const character = req.query.characters
  console.log(character)
  console.log(character === 'engineer')
  const trashLine = talkTrash(character)
  let noCharacter = ''
  if (!character) {
    noCharacter = 'noCharacter'
  }
  res.render('index', { character, noCharacter, trashLine })
})

// Get the server to listening mode
app.listen(port, () => {
  console.log(`Express is running on http://localserver/${port}`)
})