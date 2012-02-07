Ext.define('Tkweb.store.Tasks', {
    extend: 'Ext.data.Store',
    model: 'Tkweb.model.Task',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/tasks.json',
            update: 'data/updateTasks.json'
        },
        reader: {
            type: 'json',
            root: 'results',
            successProperty: 'success'
        }
    }

});
