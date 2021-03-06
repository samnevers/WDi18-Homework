var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has 'title' and 'completed' attributes

app.Todo = Backbone.Model.extend({

  // Default attributes ensure that each todo created has 'title' and 'completed' keys.
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the 'completed' state of this todo item
  toggle: function () {
    this.save({
      completed: !this.get('completed')
    });
  }
});

// Todo Collection
// ---------------

// The collection of todos is backed by *localStorage* instead of a remote server

var TodoList = Backbone.Collection.extend({

  // Reference to this collection's model
  model: app.Todo,

  // Save all of the todo items under the ``"todos-backbone"` namespace
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  // Filter down the list of all todo items that are finished
  completed: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  },

  // Filter down the list to only todo items that are still not finished
  remaining: function() {
    return this.without.apply( this, this.completed() );
  },

  // We keep the Todos in sequential order, despite being save dby unordered GUID in the databaes. This generates the next order number for new items
  nextOrder: function() {
    if ( !this.length ) {
      return 1;
    }
    return this.last().get('order') + 1;
  },

  // Todos are sorted by their original insertion order
  comparator: function( todo ) {
    return todo.get('order');
  }

});

// Create our global collection of **Todos**
app.Todos = new TodoList();
