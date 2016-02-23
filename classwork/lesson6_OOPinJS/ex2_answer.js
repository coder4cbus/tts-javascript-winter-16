var gravity = 0.5;
var time = 0;

function Particle(startX,startY) {
    this.x = startX;
    this.y = startY;
}

Particle.prototype = {
    getVelocity: function(){
        return time * gravity;
    },

    move: function() {

      this.y += this.getVelocity();
      if(this.y >= 500)
          console.log('bottom');
    }
}

var particles = [];
for(var i = 0; i < 10; i++) {
    particles.push(new Particle(i,Math.random()*500));
}

setInterval(function(){
    time++;
    particles.filter(function(p){
        return p.y < 500;
    })
    .forEach(function(p){
        p.move();
    })
}, 100)