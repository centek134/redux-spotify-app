import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./containers/Login";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";
//import {loginUrl} from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hashURL = getToken();
    window.location.hash = "";
    const token = hashURL.access_token;

    setTimeout(() => console.log(hashURL), 1000);

    if (token) {
      setToken(token);
      spotify.setAccessToken(token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <h1>I'm logged now</h1> : <Login></Login>}
    </div>
  );
}

export default App;
