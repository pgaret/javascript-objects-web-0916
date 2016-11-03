playlist = {
    'Epica': 'Dancing in a Hurricane'
}

function updatePlaylist(playlist, artist_name, song_title) {
  playlist[artist_name] = song_title
  return playlist
}

function removeFromPlaylist(playlist, artist_name) {
  delete playlist[artist_name]
  return playlist
}
