var playlist = {
  artistName: 'something',
};

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle; 
 return playlist;
}

function removeFromPlaylist(playlist, artistName){
  if playlist>0 {delete playlist.artistName;}
  return playlist
}