;
/*!
 * Marion JavaScript Library v1.0.1
 * https://github.com/marion-lau/
 * 
 * Copyright Marion Studio and other contributors
 *
 * Date: 2016-06-01
 */
! function(window, factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = global.document ?
			factory(global, true) :
			function(w) {
				if (!w.document) {
					throw new Error('the Utils requires a window with a document');
				}
				return factory(w);
			};
	} else {
		factory(global);
	}
	// test commit
}(typeof window !== 'undefined' ? window : this, function(window, noGlobal) {});
