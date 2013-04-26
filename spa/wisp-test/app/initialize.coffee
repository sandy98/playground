Application = require 'application'
sumac = require 'utils/utils_c'
utilsw = require('utils/utils_w')

# Initialize the application on DOM ready event.
$ ->
  window.app = new Application
  window.app.initialize()
  console.log "Initializing..."
  window.app.sumac = sumac
  window.app.sumaw = utilsw.sumaw
  window.app.factorial = utilsw.factorial
  
  try
   alert "Suma (coffee) 30 + 40 = " + window.sumac(30, 40) 
   alert "Suma (wisp) 30 + 40 = " + window.sumaw(30, 40)
   alert "Factorial (wisp) de 7 = " + window.app.factorial 7 
  catch e
    console.log e.toString()