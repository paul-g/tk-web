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
            xtype: 'tasklist'
        }
    });

}