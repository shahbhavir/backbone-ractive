(function(window, Ractive, Backbone, UserList){
    window.superheroes = new UserList([
        { id:1, name: 'Nightcrawler', realname: 'Wagner, Kurt',     power: 'Teleportation',    info: 'http://www.superherodb.com/Nightcrawler/10-107/' },
        { id:2, name: 'Cyclops',      realname: 'Summers, Scott',   power: 'Optic blast',      info: 'http://www.superherodb.com/Cyclops/10-50/' },
        { id:3, name: 'Rogue',        realname: 'Marie, Anna',      power: 'Absorbing powers', info: 'http://www.superherodb.com/Rogue/10-831/' },
        { id:4, name: 'Wolverine',    realname: 'Howlett, James',   power: 'Regeneration',     info: 'http://www.superherodb.com/Wolverine/10-161/' }
    ]);
    window.ractive = new Ractive({
        el: '#testDiv',
        template: '#testTmpl',
        data: {
            superheroes: superheroes,
            sortColumn: 'name',
            sort: function ( col, sortColumn ) {
                array = col.toJSON().slice(); // clone, so we don't modify the underlying data

                return array.sort( function ( a, b ) {
                return a[ sortColumn ] < b[ sortColumn ] ? -1 : 1;
                });
            }
        },
        adapt: [ 'Backbone' ]
    });
    window.ractive.on( 'sort', function ( event, column ) {
        this.set( 'sortColumn', column );
    });

})(window, Ractive, Backbone, UserList);