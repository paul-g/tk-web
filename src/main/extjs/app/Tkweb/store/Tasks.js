Ext.define('Tkweb.store.Tasks', {
    extend: 'Ext.data.Store',
    model: 'Tkweb.model.Task',
    autoLoad: true,
    proxy: {
        type: 'rest',
		url: '../rest/tasks',
        reader: {
            type: 'json',
            root: 'results',
            successProperty: 'success'
        }
    }
});
