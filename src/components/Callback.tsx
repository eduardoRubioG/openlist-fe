import React, { useEffect } from "react";

import axios from "axios";

const Callback = () => {
  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authCode: string | null = urlParams.get("code");

      if (authCode) {
        // Send auth code to the BE
        await axios.post("http://localhost:8080/api/auth/spotify", {
          authCode,
        });
        // history.push('/dashboard');
      }
    };

    handleCallback();
  }, [history]);

  return <div>Processing...</div>;
};

export default Callback;
