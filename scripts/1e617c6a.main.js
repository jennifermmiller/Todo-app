function trackList(){todoList.length,_.filter(todoList,function(a){return 1==a.done}).length}console.log("Aye Dios mio!");var ToDo=function(a){a=a||{},this.description=a.description,this.done=a.done||!1,this.id=_.uniqueId("todo_")},todoList=[],completedTodos=[];$(document).ready(function(){var a=_.template($(".todo-template").text());_.each(todoList,function(b){$(".todo-items").prepend(a(b))}),$(".js-add-todo").click(function(){var b=$(".js-new-todo-input").val(),c={description:b,done:!1,id:_.uniqueId()};todoList.push(new ToDo(c));var d=a(c);$(".todo-items").prepend(d),$(".js-new-todo-input").val(""),trackList()}),$(".todo-items").on("click",".js-complete-todo",function(){$(this).parent().toggleClass("complete-item");var a=$(this).parent().attr("id").split("-")[1];_.each(todoList,function(b){b.id==a&&(b.done=!0)}),trackList()}),$(".todo-items").on("click",".js-edit-todo",function(){}),$(".todo-items").on("click",".js-remove-todo",function(){var a=$(this).parent().attr("id").split("-")[1];todoList=_.reject(todoList,function(b){return b.id==a}),$(this).parent().remove(),trackList()})});