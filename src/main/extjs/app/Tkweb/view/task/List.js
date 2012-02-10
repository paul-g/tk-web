Ext.define('Tkweb.view.task.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.tasklist',

    title : 'All Tasks',
	
	store: 'Tasks',

    initComponent: function() {
        this.columns = [
            {header: 'Id',  dataIndex: 'id',  flex: 1},
			{header: 'Time', dataIndex: 'time', flex: 1},
            {header: 'Description', dataIndex: 'description', flex: 3}
        ];

        this.callParent(arguments);
    }
});