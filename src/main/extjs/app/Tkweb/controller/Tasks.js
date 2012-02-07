Ext.define('Tkweb.controller.Tasks', {
    extend: 'Ext.app.Controller',
    
    views: ['task.List', 'task.Edit'],
    
    stores: ['Tasks'],
    
    models: ['Task'],
    
    init: function(){
        this.control({
            'tasklist': {
                itemdblclick: this.editUser
            },
            'taskedit button[action=save]': {
                click: this.updateUser
            }
        });
    },
    
    editUser: function(grid, record){
        var view = Ext.widget('taskedit');
        
        view.down('form').loadRecord(record);
        
        console.log('Double clicked on ' + record.get('name'));
    },
    
    updateUser: function(button){
        var win = button.up('window');
		var form = win.down('form');
		var record = form.getRecord();
		var values = form.getValues();
        record.set(values);
        win.close();
		this.getTasksStore().sync();
    }
});
