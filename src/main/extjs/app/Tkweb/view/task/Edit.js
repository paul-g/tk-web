Ext.define('Tkweb.view.task.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.taskedit',

    title : 'Edit Task',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'id',
                        fieldLabel: 'id'
                    },
                    {
                        xtype: 'textfield',
                        name : 'description',
                        fieldLabel: 'Description'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});