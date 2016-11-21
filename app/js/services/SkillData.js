'use strict';

skillzApp.factory('Users', function($resource){
        return $resource('http://jsonplaceholder.typicode.com/users/:user', {user:'@user'})
});


skillzApp.factory('UserTodos', function($resource) {
        var data = $resource('http://jsonplaceholder.typicode.com/todos/:todo', {todo:'@todo'}, {
            update: {
                method: 'PUT'
            }
        });
    return data;
});




