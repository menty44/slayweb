/*eslint no-undef: "error"*/
const app = angular.module('slay', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'login.htm',
        })
        .when('/dashboard', {
            templateUrl : 'dashboard.htm',
            controller : 'dashboardCtrl'
        })
        .when('/profile', {
            templateUrl : 'profile.htm',
            controller : 'profileCtrl'
        })
        .when('/reset', {
            templateUrl : 'resetPassword.htm',
            controller : 'resetCtrl'
        })
        .when('/services', {
            templateUrl : 'services.htm',
            controller : 'servicesCtrl'
        })
        .when('/chat', {
            templateUrl : 'chat.htm',
            controller : 'chatCtrl'
        })
        .when('/notifications', {
            templateUrl : 'notifications.htm',
            controller : 'notificationsCtrl'
        })
        .when('/faq', {
            templateUrl : 'faq.htm',
            controller : 'faqCtrl'
        })
        .when('/login', {
            templateUrl : 'login.htm',
            controller : 'loginCtrl'
        })
        .when('/register', {
            templateUrl : 'register.htm',
            controller : 'registerCtrl'
        });
});
app.controller('globalCtrl', function ($scope, $rootScope) {
    $rootScope.auth = 1;
});
app.controller('profileCtrl', function ($scope) {
    $scope.msg = 'I love London';
});
app.controller('resetCtrl', function ($scope) {
  $scope.msg = 'I love London';
});
app.controller('registerCtrl', function ($scope) {
  $scope.msg = 'I love Paris';
});
app.controller('chatCtrl', function ($scope) {
  $scope.msg = 'I love Paris';
});
app.controller('servicesCtrl', function ($scope) {
  $scope.msg = 'I love Paris';
});
app.controller('notificationsCtrl', function ($scope) {
  $scope.msg = 'I love Paris';
});
app.controller('faqCtrl', function ($scope) {
  $scope.msg = 'I love Paris';
});
/* eslint func-name-matching: "error" */
// app.controller('loginCtrl', ($scope) => {
//     $scope.login = 'I love login';
// });
app.controller('loginCtrl', function ($scope) {
  $scope.login = 'I love login';
});
