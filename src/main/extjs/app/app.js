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
            layout: {
                type: 'hbox',
                align: 'stretch',
            },
            bodyPadding: 5,
            items: [{
                xtype: 'tasklist',
				flex: 3
            }, {
                xtype: 'panel',
                title: 'Add Task',
                padding: '0 0 0 5',
                items: {
                    xtype: 'taskcreate',
                },
                flex: 1
            }]
        }
    });
}
