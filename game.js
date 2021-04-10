class Game{
    constructor(){
        

    }
    getState(){
        var gs=database.ref("gameState")
        gs.on("value",function(data){
        gameState=data.val()
        })
    }
    update(state){
database.ref("gameState").update({
    gameState:state
})
    }
    start(){
       if(gameState===0){
           player=new Player()
           player.getCount()
               form=new Form()
           form.display()
       }
    }
    play(){
        form.hide()
        textSize(30)
        text("Game Starts",120,100)
        Player.getplayerinfo
        if (allPlayers!==undefined){
var postion=130
for (var plr in allPlayers)
{position=position+20
textSize(20)
text(allPlayers[plr].name +":"+allPlayers[plr].distance,120,position)
        }
    }
    if(keyIsDown(UP_ARROW)&&player.distance!==null){
        player.distance=player.distance+50
        player.update()
    }
    }
}