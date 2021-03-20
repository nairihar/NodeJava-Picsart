// play <3 J

class Player extends EventEmitter {
  on() {
  }
}

p1 = new Player()

p1.on('room_join', (player) => {

})

p1.emit('play_card', {
  type: '',
  value: 'J'
});


