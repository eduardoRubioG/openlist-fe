import React from "react";
function Login() {
  // TODO: Make sure these are correc
  const scopes = "playlist-read-private playlist-modify-private";

  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = "http://localhost:5173/callback";

  const loginUrl = new URL("https://accounts.spotify.com/authorize");

  loginUrl.searchParams.append("response_type", "code");
  loginUrl.searchParams.append("client_id", clientId);
  loginUrl.searchParams.append("scope", scopes);
  loginUrl.searchParams.append("redirect_uri", redirectUri);

  const handleClick = async () => {
    window.location.href = loginUrl.toString();
  };

  return (
    <div>
      <button onClick={handleClick}>Log in with Spotify</button>
    </div>
  );
}

export default Login;
