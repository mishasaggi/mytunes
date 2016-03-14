// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  enqueue: function(song){
    //is the argument song optional?
    if(this.length === 1){
      this.playFirst();
    }
  },

  dequeue: function(song){
    if(this.at(0) === song){
      this.playNext();
    }
    else {
      this.remove(song);
    }
  },

  playNext: function(){
    this.shift();
    if(this.length >= 1){
      
    }

  },

  playFirst: function(){

  }

});