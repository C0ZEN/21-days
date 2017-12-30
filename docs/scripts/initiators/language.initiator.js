/**
 * Generated header by C0ZEN for 21-days project
 * Generated file language.initiator on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 30/12/2017
 * Time: 11:06
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('21days')
		.run(config);

	config.$inject = [
		'tmhDynamicLocale',
		'moment'
	];

	function config(tmhDynamicLocale, moment) {
		const lang = 'fr';
		tmhDynamicLocale.set(lang);
		moment.locale(lang);
	}

}(window.angular));