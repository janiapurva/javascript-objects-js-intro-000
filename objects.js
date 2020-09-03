var playlist ={
  artistNames : "songTitles"
};
function updatePlaylist(playlist,artistName,songTitles){
  playlist['Phil Ochs']='slowdive'
  return playlist
};
function removeFromPlaylist(playlist,artistNames){
  delete artistNames;
}
