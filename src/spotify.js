export const endPointUrl = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "8fef3ade297c44d68b5aa3407b160828";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${endPointUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
