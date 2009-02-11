Ext.namespace('Ext.ux');

/**
 * @class Ext.ux.Image
 * @extends Ext.Component
 * @desc
 * Image component for ExtJs
 * 
 * @licence GPLv3
 * @author @author Charles Opute Odili (chalu) <a href="mailto:chaluwa@gmail.com">chaluwa@gmail.com</a>
 * 
 * <a href="http://extjs.com/forum/showthread.php?p=286538">Forum Thread</a>
 * <a href="http://code.google.com/p/ext-ux-image/">Project Home</a>
 * 
 * @constructor
 * @param {Object} config The config object
 */ 
Ext.ux.Image = Ext.extend(Ext.BoxComponent, {
	/**
	 * @cfg {String} src the URL of an image to initiaize it with, 
	 * deafults to Ext.BLANK_IMAGE_URL
	 */
	src : Ext.BLANK_IMAGE_URL,
	
	/**
	 * @cfg
	 */
	autoEl : {
		tag : 'img',
		cls : 'tng-managed-image',
		src : Ext.BLANK_IMAGE_URL		
	},
	
	/**
     * Inits this component with the specified config-properties and automatically
     * creates its components.
     */
	initComponent: function () {		
		Ext.ux.Image.superclass.initComponent.apply(this, arguments);
	},
	
	/**
     * Renders the component within it's container
     */
	onRender: function(){
		Ext.ux.Image.superclass.onRender.apply(this, arguments);
		
		if(!Ext.isEmpty(this.src) && (this.src !== Ext.BLANK_IMAGE_URL)){
			this.setSrc(this.src);
		}
		this.relayEvents(this.el, 
			[
				"click", "dblclick", "mousedown", "mouseup", "mouseover",
				"mousemove", "mouseout", "keypress", "keydown", "keyup"
			]
		);				
	},
	
	/**
	 * Sets the src for the image component
	 * @cfg {String} src the new src
	 */
	setSrc: function (src) {
		this.el.dom.src = src;
	}
});

Ext.reg('image', Ext.ux.Image);
