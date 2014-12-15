;(function ( $, window, document, undefined ) {
		var pluginName = "adLibber",
			defaults = [''];

		function Plugin ( element, options ) {
				this.element = element;
				this.alternatives = $.extend( [], defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		$.extend(Plugin.prototype, {
			init: function () {
				if(this.alternatives.length > 0) {
					this.element.innerHTML = this.alternatives[Math.floor(Math.random() * this.alternatives.length)];
				}
			},
		});

		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );
