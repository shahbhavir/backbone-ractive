(function(window, Backbone){

    var UserList = Backbone.Collection.extend({
        model: User,
        getCount: function(){
            return this.length;
        }
    });

    window.UserList = UserList;

})(window, Backbone, User);