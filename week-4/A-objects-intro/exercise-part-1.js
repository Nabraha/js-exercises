/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable

*/

var Basketball ={
  pointGuard: 'DRose',
  powerForard: 'D-Rodman',
  shootingGuard: 'step',
      players: {
        shoot: function(){
          console.log('3 point');
        },
        name: 'nab',
        shoesSize: 12
      }
}

//console.log(Basketball.players.name);

Basketball.players.shoot();

//console.log(Basketball.players.shoot);