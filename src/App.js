import "./App.css";
import React, { useEffect } from "react";
import Login from "./containers/Login";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";
import Player from "./containers/Player";
//import {loginUrl} from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hashURL = getToken();
    window.location.hash = "";
    const token = hashURL.access_token;

    if (token) {
      dispatch({
        type: "SET_TOKEN",
        token: token,
      });
      spotify.setAccessToken(token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then( playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
    }
  }, []);

  return (
    <div className="App">{token ? <Player spotify = {spotify}></Player> : <Login></Login>}</div>
  );
}

export default App;
