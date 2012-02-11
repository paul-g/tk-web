Ext.define('Tkweb.view.task.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.taskedit',
    
    title: 'Edit Task',
    layout: 'fit',
    autoShow: true,
    
    initComponent: function(){
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
			autoScroll: true,
			bodyPadding: 5,
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'textfield',
                name: 'time',
                fieldLabel: 'Time'
            }, {
                xtype: 'textfield',
                name: 'description',
                fieldLabel: 'Description'
            }, {
				xtype: 'textfield',
				name: 'done',
				fieldLabel: 'Done'
			}]
        }];
        
        this.buttons = [{
            text: 'Save',
            action: 'save'
        }, {
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];
        
        this.callParent(arguments);
    }
});
