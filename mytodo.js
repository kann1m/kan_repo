angular.module('myapp', [])
    .controller('MainController', ['$http', function ($http) {
        this.tasks = [
            { "body": "do this 1", "done": false },
            { "body": "do this 2", "done": false },
            { "body": "do this 3", "done": true },
            { "body": "do this 4", "done": false }
        ]
        this.add = function () {
            //this.newTodo は$scope.newTodoと同じ意味！！！
            console.log(this.newTodo);
            this.tasks.push({ "body": this.newTodo, "done": false });
            this.newTodo = '';
        }
        this.getdone = function () {
            var count = 0;
            angular.forEach(this.tasks, function (t) {
                if (t.done) {
                    count++;
                }
            })
            return count;
        }
        this.deleteTask = function(){
            var oldTasks = this.tasks;
            console.log("before "+this.tasks);
            this.tasks=[];
            console.log("after "+this.tasks);
            console.log(typeof(this.tasks));
            angular.forEach(oldTasks,function(t){
                if(!t.done){
                console.log(t);
                this.tasks.push(t);
                }
            })
            
        }
    }])