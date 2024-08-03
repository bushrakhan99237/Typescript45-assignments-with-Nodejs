// define the make_album function for
function make_album(artist_name: string, album_title: string, tracks?: number){
let album: {artist: string, title: string, tracks?: number} ={
    artist: artist_name,
    title: album_title,
};
if (tracks !== undefined){
    album. tracks = tracks;
}
return album;

}

// calling three times functions and creating 3 varibales with different values
let album1 = make_album("bushra","album title 1");

let album2 = make_album("ayyan","album title 2");

// calling a make_album function with third parameters
let album3 = make_album("ali","album title 3",10);

// printing the variables
console.log(album1);
console.log(album3);
console.log(album3);
