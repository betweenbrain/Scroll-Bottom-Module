<?php defined('_JEXEC') or die;

/**
 * File       mod_scrolldown.php
 * Created    9/18/14 12:18 PM
 * Author     Matt Thomas | matt@betweenbrain.com | http://betweenbrain.com
 * Support    https://github.com/betweenbrain/
 * Copyright  Copyright (C) 2014 betweenbrain llc. All Rights Reserved.
 * License    GNU GPL v2 or later
 */

$doc = JFactory::getDocument();
$doc->addScript(JURI::base(true) . '/media/mod_scrolldown/js/scroll-down.min.js');
$doc->addStyleSheet(JURI::base(true) . '/media/mod_scrolldown/css/scroll-down.min.css');

require(JModuleHelper::getLayoutPath('mod_scrolldown'));