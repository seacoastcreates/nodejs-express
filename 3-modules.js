// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const bobbyBoy = require('./6-alt-flavor')

// When you import a module you also invoke it
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)