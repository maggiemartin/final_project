(function(){

  App.Views.SignUpView = Parse.View.extend({

    events: {

      'submit #signUp' : 'addUser'
    },
    initialize: function(){
      this.render();

      $('#homeSearch').html(this.$el);
    },

    render: function(){
      this.$el.html($('#SignUpTemp').html());
    },

    addUser: function(e){
      e.preventDefault();
      var user = new Parse.User({
      username: $('#signUpEmail').val(),
      email: $('#signUpEmail').val(),
      password: $('#signUpPassword').val()
      //name: $('#signUpN')
      });
      user.signUp(null, {
        success: function(user) {
          App.user = user;

          App.router.navigate('add', {trigger: true});
          $('#signUpField').hide();
        },
         error: function(user, error) {
        // //   // Show the error message somewhere and let the user try again.
           alert("Error: " + error.code + " " + error.message);
          }
      });

    }
  });
}());
