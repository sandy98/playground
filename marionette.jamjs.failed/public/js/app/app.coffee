define ["jquery", "backbone"], ($, Backbone) ->
   class Backbone.Application
     constructor: ->
       @initialize()
       
     initialize: ->

   class App extends Backbone.Application
     initialize: ->
       console.log "JQuery current version: #{$.fn.jquery}"
       console.log "Backbone current version: #{Backbone.VERSION}"
       $('#contents').css color: '#880000'
   
   
