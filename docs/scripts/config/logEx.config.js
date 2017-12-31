/**
 * Generated header by C0ZEN for 21-days project
 * Generated file logEx.config on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 31/12/2017
 * Time: 09:09
 * Version: 1.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('21days')
		.config(config);

	config.$inject = [
		'logExProvider',
		'appConstants',
		'$filter'
	];

	function config(logExProvider, appConstant, $filter) {
		logExProvider
			.enableLogging(appConstant.logs.enabled)
			.overrideLogPrefix($className => {
				const separator = ' >> ';
				const format    = 'hh:mm:ss';
				const now       = $filter('date')(new Date(), format);
				return now.toString() + (!angular.isString($className) ? '' : '::' + $className) + separator;
			});
	}

}(window.angular));