(function(window, Backbone){

    var User = Backbone.Model.extend({
        speak: function(){
            console.log('My name is ' + this.name);
            return 'My name is ' + this.name;
        }
    });

    window.User = User;

})(window, Backbone);