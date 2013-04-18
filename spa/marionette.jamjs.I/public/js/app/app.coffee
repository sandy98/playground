define ["jquery", "underscore", "backbone", 'backbone.marionette'], ($, _, Backbone, Marionette) ->
#   class Backbone.Application
#     constructor: ->
#       @initialize()
#       
#     initialize: ->

   class App extends Marionette.Application
     initialize: =>
#       @on "initialize:after", (options) =>
         console.log "JQuery current version: #{$.fn.jquery}"
         console.log "Underscore current version: #{_.VERSION}"
         console.log "Backbone current version: #{Backbone.VERSION}"
         $('#contents').css color: '#880000'
   
   
