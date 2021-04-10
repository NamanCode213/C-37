class Form{
constructor(){
    this.input=createInput("name")
    this.button=createButton("PLAY")
    this.greeting=createElement("h2")
}
hide(){
    this.button.hide()
    this.input.hide()
    this.gretting.hide()
}
display(){
    var title=createElement("h1")
    title.html("Multiplayer Car Racing")
    title.position(120,0)
    this.input.position(120,100)
this.button.position(150,150)
this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playerCount=playerCount+1
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)
    this.greeting.html("hello "+player.name+" waiting for others to join")

    this.greeting.position(200,200)
})
}

}