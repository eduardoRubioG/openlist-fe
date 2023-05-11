import React, { useState } from "react";
import axios from "axios";
interface SongInputProps {}

const SongInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // hit api here
    await axios.post("http://localhost:8080/api/apple/playlist", {
      playlistId: inputValue,
    });

    setInputValue("");
  };

  return (
    <>
      <p>
        https://music.apple.com/us/playlist/focusing-on-myself-tunes/pl.u-e98lkxECZbPpq9l
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SongInput;
