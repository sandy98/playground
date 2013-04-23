define ['jquery', 'underscore', 'backbone', 'backbone.marionette', 'cs!app/views/userview'], ($, _, Backbone, Marionette, UserView) ->

   user = new Backbone.Model fullname: 'Mon-El aka Lar Gand'
          
   class App extends Marionette.Application
     initialize: =>
       @addRegions(fullname: '#fullname')
       @myView = new UserView model: user
       $('#txt-fullname').on 'keypress', (ev) =>
         return unless ev.which is 13
         @myView.model.set fullname: $('#txt-fullname').val() unless not $('#txt-fullname').val()
         $('#txt-fullname').val ''
         @fullname.show @myView
         
       @fullname.show @myView
       
       console.log "Backbone v#{Backbone.VERSION}"   
   
