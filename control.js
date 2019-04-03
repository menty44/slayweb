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
    var newauth = localStorage.getItem('auth');
    var auth = JSON.parse(newauth);
    $rootScope.auth = parseInt(auth);
    // if($scope.auth === 0){
    //     $rootScope.auth = 0;
    //     $route.reload();
    //     //location.reload();
    // }else {
    //     $rootScope.auth = 1;
    // }

    $rootScope.logout = function() {
        $scope.auth = 1;
        localStorage.clear();
        localStorage.setItem('auth', '1');
        window.location.assign('http://localhost:8000/#!/login');
    }
    
});
app.controller('profileCtrl', function ($scope) {
    $scope.msg = 'I love London';
});
app.controller('dashboardCtrl', function ($scope) {
    //Check if the current URL contains '#'
    (function()
    {
        if( window.localStorage )
        {
            if( !localStorage.getItem('firstLoad') )
            {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }
    })();
    // if(document.URL.indexOf("#") === -1){
    //     // Set the URL to whatever it was plus "#".
    //     url = document.URL+"#";
    //     location = "#";
    //
    //     //Reload the page
    //     location.reload(true);
    // }
    $scope.msg = 'I love London';
});
app.controller('resetCtrl', function ($scope) {
    $scope.msg = 'I love London';
});
app.controller('registerCtrl', function ($scope, $http, $window, $rootScope) {
    $scope.reg = function(d) {
        $scope.regload = 'load';
        console.log(d);
        console.log(JSON.stringify(d));
        // Simple GET request example:
        $http({
            method: 'POST',
            // url: 'http://localhost:4000/register/add',
            url: 'http://demo1764871.mockable.io/reg',
            data: d
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response.data);
            if(response.data.code === 0) {
                $scope.regsuc = 0;
                $rootScope.auth = 0;
                function rider() {
                    console.log("After 5.5 rider!");
                    localStorage.setItem('auth', '0');
                    $window.location.href = '/#!/dashboard';
                    // window.location.assign('http://localhost:8000/#!/dashboard');
                    // setTimeout($location.path('/dashboard'), 4500);
                }
                function timeFunction () {
                    setTimeout(()=>{ 
                        console.log("After 5.5 seconds!");
                        rider();
                        }, 2500);
                    }
                    timeFunction();
                // setTimeout($location.path('/dashboard'), 4500);
            }
            }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('error in registering');
            console.log(response);
            alertify.error('Error In Registration Process.'); 
            });

    };
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
app.controller('loginCtrl', function ($scope, $location, $http) {
    $scope.login = 'I love login';
});
