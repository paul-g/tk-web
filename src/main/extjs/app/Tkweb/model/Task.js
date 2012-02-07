Ext.define('Tkweb.model.Task', {
    extend: 'Ext.data.Model',
    fields: [ 'id', 'description'],
	proxy: {
		type: 'ajax',
		url: 'data/tasks.json',
		reader: {
			type: 'json',
			root: 'results'
		} 
	}	
});