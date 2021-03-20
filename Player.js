class Player{
    constructor(

    )
    getCount(){
        var plyerCountREF=database.ref("plyerCount");
        plyerCountREF.on("value",function(data){
            plyerCount=data.val();
    })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(name){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).set({
            name:name
        })
    }
}