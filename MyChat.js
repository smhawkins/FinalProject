/**
 * Created by smhawkins
 */
angular.module('project', ['ngRoute', 'firebase'])

    .value('fbURL', 'https://swdesignproject14.firebaseio.com/')

    .factory('Projects', function($firebase, fbURL) {
        return $firebase(new Firebase(fbURL)).$asArray();
    })

    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:'ChatRoomCtrl',
                templateUrl:'ChatRoom.html'
            })
    })

    .controller('ChatRoomCtrl', function($scope, $location, Projects) {
        $scope.messages = Projects;
        $scope.save = function() {
            Projects.$add($scope.m).then(function(data) {

                $location.path('/');
            });
        };

    })
