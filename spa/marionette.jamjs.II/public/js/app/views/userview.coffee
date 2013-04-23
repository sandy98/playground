define ['backbone.marionette', 'text!app/views/templates/user_tpl.html'], (Marionette, tpl) ->

   class UserView extends Marionette.ItemView
     template: _.template tpl
     

