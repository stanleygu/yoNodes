'use strict';

angular.module('yoNodesApp', ['ui.ace', 'ui'])
  .config(function($routeProvider) {
  $routeProvider
    .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
    .otherwise({
    redirectTo: '/'
  });
});
