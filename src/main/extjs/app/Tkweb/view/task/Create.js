Ext.define('Tkweb.view.task.Create', {
    extend: 'Ext.form.Panel',
    alias: 'widget.taskcreate',
    bodyPadding: 5,
    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    border: 0,
    
    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Description',
        name: 'description',
        allowBlank: false
    }, {
        fieldLabel: 'Time',
        name: 'id',
        allowBlank: false
    }],
    initComponent: function(){
        this.callParent();
        this.reset();
    },
    reset: function(){
        this.form.reset();
    },
    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        handler: this.reset
    }, {
        text: 'Add',
        action: 'add',
        formBind: true, //only enabled once the form is valid
        disabled: true,
    }]
});
