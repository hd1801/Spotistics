import fetch from "node-fetch";
const callback = async (req, res) => {
  if (req.query.error) {
    return res.redirect(`/?${new URLSearchParams({ error: req.query.error })}`);
  }

  const code = req.query.code;
  if (!code) {
    return res.status(400).json({
      error: "missing_code",
      message: "Spotify authorization code is required",
    });
  }

  const body = {
    code,
    redirect_uri: process.env.REDIRECT_URI,
    grant_type: "authorization_code",
  };

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "post",
      body: new URLSearchParams(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET).toString("base64"),
      },
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({
        error: "token_exchange_failed",
        spotify_error: data,
      });
    }

    return res.redirect(`/?${new URLSearchParams(data)}`);
  } catch (error) {
    return res.status(500).json({
      error: "spotify_request_failed",
      message: error.message,
    });
  }
};

export default callback;