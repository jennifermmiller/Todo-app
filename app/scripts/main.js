console.log('Aye Dios mio!');

// var examples = [
//   {
//     description: 'Get groceries',
//     done: false,
//     id: _.uniqueId()
//   },
//   {
//     description: 'Leap',
//     done: false,
//     id: _.uniqueId()
//   },
//   {
//     description: 'Pet the dog',
//     done: false,
//     id: _.uniqueId()
//   }
// ];

//need a constructor?
var ToDo = function(listItems) {
  listItems = listItems || {};
  this.description = listItems.description;
  this.done = listItems.done || false;
  this.id = _.uniqueId('todo_'); 
}

var todoList = []; // tracks all list items
var completedTodos = []; //tracks all items listed as complete...do we need this?

function trackList () {
  var allTodos = todoList.length;
  var completedTodos = _.filter(todoList, function(item) {
    return item.done == true;
  }).length
  var activeTodos = allTodos - completedTodos;

  //need to fix this
  //$('.js-todo-completed').text(completedTodos);

};

$(document).ready(function(){
	var todoTemplate = _.template($('.todo-template').text())

  //Render preloaded data
  _.each(todoList, function(item){
    $('.todo-items').prepend( todoTemplate(item) );
  });

  // Setup Add Button click event
  $('.js-add-todo').click(function(){

    // grab the description from the input
    var description = $('.js-new-todo-input').val();

    // create an object literal with the description and 'done' set to false
    var todo = {
      description: description,
      done: false,
      id: _.uniqueId()
    };

    todoList.push(new ToDo(todo));

    // store the rendered template string
    var renderedTemplate = todoTemplate(todo);

    // now prepend the template into the dom
    $('.todo-items').prepend(renderedTemplate);

    $('.js-new-todo-input').val('');

    trackList();
  });

  //Complete btn:
  $('.todo-items').on('click','.js-complete-todo', function(){
    $(this).parent().toggleClass('complete-item');

    var parentId = $(this).parent().attr('id').split('-')[1];
    
    _.each(todoList, function(item,index){
      if(item.id == parentId) {
        item.done = true;
      }
    });

    trackList();
  });

  //Edit btn:
  $('.todo-items').on('click', '.js-edit-todo', function(){
    //...a whole bunch of something... have a new template for this?
  });

  //Remove btn:
  $('.todo-items').on('click', '.js-remove-todo', function(){
    var parentId = $(this).parent().attr('id').split('-')[1];

    todoList = _.reject(todoList, function(item){ 
      return item.id == parentId;
    });

    $(this).parent().remove();

    trackList();
  });
});