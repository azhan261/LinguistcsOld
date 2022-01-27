//dichiarazione streams
var streams = [
  "https://wowzaprod231-i.akamaihd.net/hls/live/1019022/1ef04e6c/playlist.m3u8"
];

function getUrl(canale){
	audio_url = streams[canale];
	return audio_url;
}

function playStream(flusso, player){
	player.api("play","js:getUrl(" + flusso + ");");
}
function stopStream(player){
	player.api("stop");
}
function muteStream(muto, player){
	muto ? player.api("mute") : player.api("unmute");
}
function volumeStream(livello, player){
	player.api("volume", livello);
}
function PlayerjsEvents(event,id,data){
   if(event == "pause"){
      FluidPlayer.api("stop");
   }
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
