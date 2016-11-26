(function () {
	"use strict";

	angular
		.module("common.services",
					["ng-resource"])
		.constant("appSettings",
		{
			serverPath: "http://localhost:54045/"
		});
}());