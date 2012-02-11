Ext.define('Tkweb.controller.Tasks', {
    extend: 'Ext.app.Controller',
    
    views: ['task.List', 'task.Edit', 'task.Create'],
    
    stores: ['Tasks'],
    
    models: ['Task'],
    
    init: function(){
        this.control({
            'tasklist': {
                itemdblclick: this.editUser,
				edit: this.updateEdit,
            },
            'taskedit button[action=save]': {
                click: this.updateTask
            },
            'taskcreate button[action=add]': {
                click: this.addTask
            }
        });
    },
    
    editUser: function(grid, record){
        var view = Ext.widget('taskedit');
        view.down('form').loadRecord(record);
    },
	
	updateEdit: function(editor,e ) {
		console.log('Handling edit');
	    //e.record.commit();
		this.getTasksStore().sync();
	},
    
    updateTask: function(button){
        var win = button.up('window');
        var form = win.down('form');
        var record = form.getRecord();
        var values = form.getValues();
        record.set(values);
        win.close();
        this.getTasksStore().sync();
    },
    
    addTask: function(button){
        var form = button.up('taskcreate');
        var record = Ext.create('Tkweb.model.Task');
        record.set(form.getValues());
        this.getTasksStore().add(record);
        this.getTasksStore().sync();
        form.reset();
    }
});