Ext.namespace('Ext.ux');
/**
 * Image component for ExtJs
 * 
 * @author Charles Opute Odili (chalu)
 * @version 1.0
 * @licence GPLv3
 */

/**
 * @class Ext.ux.Image
 * @extends Ext.Component
 *
 * @constructor
 * @param {Object} config The config object
 */ 

Ext.ux.Image = Ext.extend(Ext.Component, {
	/**
	 * @param {String} src the URL of an image to initiaize it with, 
	 * deafults to Ext.BLANK_IMAGE_URL
	 */
	src : Ext.BLANK_IMAGE_URL,
	
	/**
	 * @private
	 */
	autoEl : {
		tag : 'img',
		cls : 'tng-managed-image',
		src : Ext.BLANK_IMAGE_URL		
	},
	
	initComponent: function () {		
		Ext.ux.Image.superclass.initComponent.apply(this, arguments);
	},
	
	onRender: function(){
		Ext.ux.Image.superclass.onRender.apply(this, arguments);
		
		if(!Ext.isEmpty(this.src) && (this.src !== Ext.BLANK_IMAGE_URL)){
			this.setSrc(this.src);
		}		
	},
	
	/**
	 * Sets the src for the image component
	 * @param {String} src the new src
	 */
	setSrc: function (src) {
		this.el.dom.src = src;
	}
});

Ext.reg('image', Ext.ux.Image);
