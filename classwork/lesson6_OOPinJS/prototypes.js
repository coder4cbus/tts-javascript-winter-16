var time = 0;
var gravity = .5;
var particles = [];
​
function Particle(startX, startY){
  this.x = startX;
  this.y = startY;
}
​
Particle.prototype = {
  getVelocity : function(){
    return time * gravity;
  },
  
  move : function(){
    // this.y + this.getVelocity();
    var movement = this.y + this.getVelocity();
    if( movement >= 500){
      console.log('bottom');
    } else{
      return movement;
    }
  }
}
​
setInterval(function(){
  time++;
  var newParticles = particles.filter(function(i){
      return i.y < 500;
  });
  // console.log(newParticles);
  for(var i = 0; i < newParticles.length ; i++){
    newParticles[i].move();
  }
}, 100);
​
for(var i = 0; i < 100 ; i++){
  var particle = new Particle(i, (Math.random()*600));
  particles[i] = particle;
}