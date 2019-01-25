var playlist = {
  artistName: 'something',
};

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle; 
 return playlist;
}