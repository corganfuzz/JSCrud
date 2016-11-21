'use strict';

skillzApp.controller("SkillController", function  ($scope,  UserTodos, Users) {

        $scope.todos = UserTodos.query();
        $scope.users = Users.query();
        $scope.returnUserName = function(userId) {
        var i, len;
        for (len = $scope.users.length, i=0; i<len; ++i) {
            if($scope.users[i].id == userId) {
                return $scope.users[i].name;
            }
        }
        return name
    };
        
        $scope.UpdateTodo = function(index, value) {

            $scope.todos[index].completed = value;


        };





    });





