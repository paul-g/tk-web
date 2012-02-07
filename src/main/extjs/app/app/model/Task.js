Ext.define('Task', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' }
    ]
});

Ext.create('Ext.data.Store', {
    model: 'User',
    data: [
        { firstName: 'Ed',    lastName: 'Spencer' },
        { firstName: 'Tommy', lastName: 'Maintz' },
        { firstName: 'Aaron', lastName: 'Conran' },
        { firstName: 'Jamie', lastName: 'Avins' }
    ]
});
