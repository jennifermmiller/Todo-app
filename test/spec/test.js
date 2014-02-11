/* global describe, it */

(function () {
    'use strict';

  describe('In this todo app ', function () {
    describe('when the add btn is clicked, ', function () {
      it('should add a new todo div when the input is populated', function () {
        //This is where we go from unit test to integration tests
        //Depending on side-effects of events to create desired affect
        //Below test is on the fragile side - may never pass.....but it's a good starting point
        //add text to the .new-todo input
        $('.new-todo-input').val('Drink beer');

        //click 'add' btn
        $('.add-todo').click();

        //Store value of the first todo div's text
        var firstTodoText = $('.todo-item').first().children('.description').text();

        expect(firstTodoText).to.equal('Drink beer');
      });
    });
    
    describe('when the remove btn is clicked,', function(){
      it('should remove the nearest div', function(){ //better explanation? it's parent div? assoiciate div?
        $('.new-todo-input').val('Drink beer');
        $('.add-todo').click();
        var firstTodoText = $('.todo-item').first().children('.description').text();
        $('.remove-tod0').click();

        expect(firstTodoText).to.not.equal('Drink beer');
      });

      it('should remove the object associated with it from the toDoList array', function(){
        $('.new-todo-input').val('Drink beer');
        $('.add-todo').click();
        var firstTodoText = $('.todo-item').first().children('.description').text();
        $('.remove-todo').click();

        expect(toDoList).to.not.contain('Drink beer');
      });

      it('should decrease the item count by one', function(){
        $('.new-todo-input').val('Drink beer');
        $('.add-todo').click();
        var listSize = toDoList.length;
        $('.remove-todo').click();

        expect(toDoList.length).to.equal(listSize - 1);
      });
    });

    describe('when the complete button is clicked', function(){
      it('should add a class to the completed item');//better way to describe this?
        //how to test for added class?
      it('should change the property value of done to true', function(){
        $('.new-todo-input').val('Drink beer');
        $('.add-todo').click();
        var firstTodoText = $('.todo-item').first().children('.description')
        $('.js-complete-todo').click();

        expect(firstTodoText).to.have.//text-decoration line-through

      });
      //if using complete array:...undecided
      it('should add the object to the complete array');
    
      it('should decrease the item count by one', function(){
        $('.new-todo-input').val('Drink beer');
        $('.add-todo').click();
        var listSize = toDoList.length;
        $('.js-complete-todo').click();

        expect(toDoList.length).to.equal(listSize + 1);
      });
      it('should remove the added class when re-clicked');
        
    });

    //Just trying to flesh-out what will be happening with edit
    describe('when the edit button is clicked,' function(){
      it('should turn the div space into an input field');
      it('should keep the previous data and focus it');
      it('should not change the object\'s place within the toDoList array');
      it('should save the corrected data when clicked again');
      it('should not affect the item count');
    });
  });
})();
