// interface Album {
//   artist: string;
//   title: string;
//   tracks?: number;
// }
function make_album(artist, title, tracks) {
    let album_obj = { artist, title, };
    if (tracks) {
        album_obj.tracks = tracks;
    }
    return album_obj;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
export {};
