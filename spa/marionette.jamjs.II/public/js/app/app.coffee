define ['jquery', 'underscore', 'backbone', 'backbone.marionette', 'text!app/views/templates/user_tpl.html'], ($, _, Backbone, Marionette, tpl) ->

   user = new Backbone.Model fullname: 'Mon-El aka Lar Gand'
          
   class MyView extends Marionette.ItemView
     template: _.template tpl
     
     #initialize: =>
     #  @model.on 'change', @render

          
   class App extends Marionette.Application
     initialize: =>
       @addRegions(fullname: '#fullname')
       @myView = new MyView model: user
       $('#txt-fullname').on 'keypress', (ev) =>
         return unless ev.which is 13
         @myView.model.set fullname: $('#txt-fullname').val() unless not $('#txt-fullname').val()
         $('#txt-fullname').val ''
         @fullname.show @myView
         
       @fullname.show @myView
       
       console.log "Backbone v#{Backbone.VERSION}"   
   
