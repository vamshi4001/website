angular.module("firstApp")
	.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'homeController'
          })
          .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'aboutController'
          })
          .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'contactController'
          })
          .state('contactDetails', {
            url: '/contact/:contactId',
            templateUrl: 'views/contact.html',
            controller: 'contactController'
          })
          
        $urlRouterProvider.otherwise('/home');   
    })