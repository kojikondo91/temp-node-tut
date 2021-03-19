// Modules

// Import
const names = require('./04-namesModule');
const sayHi = require('./05-functionModule');
const data = require('./06-alternative-export');

// This module contains a function that is envoked - see console log
require('./07-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
