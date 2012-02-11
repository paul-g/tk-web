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
            }
        }, {
            header: 'Description',
            dataIndex: 'description',
            flex: 3,
            filterable: true
        }, {
            header: 'Done',
            dataIndex: 'done',
            flex: 1,
			filter: {
				type: 'boolean',
				defaultValue: true,
				yesText: 'true',
				noText: 'false'
			}
        }];
        this.features = [{
            ftype: 'filters',
            local: true
        }];
        this.callParent(arguments);
    }
});
