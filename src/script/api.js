//URL de donde obtenemos los datos de la API de Deezer
var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";

//Consigue un listado de Playlists
function getPlaylists() {
    return fetch(url + 'chart/0/playlists', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => response);
}

//Dada una id, consigue la playlist que coincida con ese parámetro
function getPlaylist(id) {
    return fetch(url + 'playlist/' + id, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => response);
}

//Dado un parámetro, devuelve un array de canciones
function getTracks(q) {
    return fetch(url + 'search/track?q=' + q, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => response);
}

//Dado un parámetro, devuelve un array de álbumes
function getAlbums(q) {
    return fetch(url + 'search/album?q=' + q, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => response);
}

//Dado un parámetro, devuelve un array de artistas
function getArtists(q) {
    return fetch(url + 'search/artist?q=' + q, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => response);
}

function getArtistDetail(q) {
    return fetch(url + 'artist/' + q, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => response);
}

//EXPORTS
export default { getPlaylists, getPlaylist, getTracks, getAlbums, getArtists, getArtistDetail };