Ext.require('Ext.container.Viewport');
Ext.require('Tkweb.controller.Tasks');

Ext.application({
    name: 'Tkweb',
    controllers: ['Tasks'],
    store: ['Tasks'],
    launch: main
});

function main(){

    Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: {
            xtype: 'panel',
            title: 'TimeKeeper 0.1',
            layout: 'hbox',
			bodyPadding: 5,
            items: [{
                xtype: 'tasklist',
				padding: 5,
				flex: 3
            }, {
                xtype: 'panel',
				title: 'Add Task',
				padding: 5,
				layout: 'fit',
				items: {
					xtype: 'taskcreate',
				},
				flex: 1
            }]
        }
    });
    
}
