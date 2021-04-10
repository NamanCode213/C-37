class Player{
    constructor(){
        this.index=null
this.distance=0
this.name=null
    }
    getCount(){
        var pc=database.ref("playerCount")
        pc.on("value",(data)=>{
        playerCount=data.val()
        })
    }
    updateCount(count){
database.ref("playerCount").update({
    playerCount:count
})

}
update(){
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).set(
        {
            name:this.name,
            distance:this.distance
        }
    )
}
static getplayerinfo(){
    var playerinfo=database.ref("players")
    playerinfo.on("value",(data)=>{
        allPlayers=data.val()
    })
}
}