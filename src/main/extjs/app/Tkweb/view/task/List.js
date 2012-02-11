Ext.require('Ext.ux.grid.FiltersFeature');

Ext.define('Tkweb.view.task.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tasklist',
    
    title: 'All Tasks',
    
    store: 'Tasks',
    
    initComponent: function(){
        this.columns = [{
            header: 'Id',
            dataIndex: 'id',
            flex: 1,
            filterable: true
        }, {
            header: 'Time',
            dataIndex: 'time',
            flex: 1,
            filter: {
                type: 'numeric'
            },
            field: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            header: 'Description',
            dataIndex: 'description',
            flex: 3,
            filterable: true,
            field: {
                xtype: 'textfield',
                allowBlank: false
            }
        }, {
            header: 'Done',
            dataIndex: 'done',
            flex: 1,
            filter: {
                type: 'boolean',
                defaultValue: true,
                yesText: 'true',
                noText: 'false'
            },
            field: {
                xtype: 'textfield',
                allowBlank: false
            }
        }];
        this.features = [{
            ftype: 'filters',
            local: true
        }, {
            ftype: 'grouping'
        }];
        
        selType: 'cellmodel', this.selType = 'cellmodel';
        
        this.plugins = [Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            listeners: {
                click: {
                    element: 'el', //bind to the underlying el property on the panel
                    fn: function(){
                        console.log('click el');
                    }
                },
                dblclick: {
                    element: 'body', //bind to the underlying body property on the panel
                    fn: function(){
                        console.log('dblclick body');
                    }
                }
            }
        })];
        
        
        this.callParent(arguments);
    }
});
