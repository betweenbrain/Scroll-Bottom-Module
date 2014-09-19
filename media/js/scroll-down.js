/**
 * File
 * Created    9/18/14 12:32 PM
 * Author     Matt Thomas | matt@betweenbrain.com | http://betweenbrain.com
 * Support    https://github.com/betweenbrain/
 * Copyright  Copyright (C) 2014 betweenbrain llc. All Rights Reserved.
 * License    GNU GPL v2 or later
 *
 * Based on code by http://www.joomlabamboo.com from their New Lifestyle template
 */

jQuery(document).ready(function () {
	jQuery('#toBottom').fadeIn();
	jQuery(window).scroll(function () {

		if (jQuery(this).scrollTop() > 200) {
			jQuery('#toBottom').fadeOut();
		}
		else {
			jQuery('#toBottom').fadeIn();
		}
	});

	jQuery('#toBottom').click(function () {
		jQuery('html, body').animate({scrollTop: jQuery(document).height()}, 'slow');
		return false;
	});
});