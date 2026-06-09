const DEFAULT_SCOPES = [
  "user-top-read",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-follow-read",
  "user-library-read",
  "playlist-read-collaborative",
  "playlist-read-private",
];

const ALLOWED_SCOPES = new Set(DEFAULT_SCOPES);

const normalizeScopeInput = (scopeInput) => {
  if (!scopeInput) return DEFAULT_SCOPES;

  const parsedScopes = scopeInput
    .split(/[,\s]+/)
    .map((scope) => scope.trim())
    .filter(Boolean);

  if (parsedScopes.length === 0) return DEFAULT_SCOPES;
  return parsedScopes;
};

const login = (req, res) => {
  const requestedScopes = normalizeScopeInput(req.query.scopes);
  const invalidScopes = requestedScopes.filter((scope) => !ALLOWED_SCOPES.has(scope));

  if (invalidScopes.length > 0) {
    return res.status(400).json({
      error: "invalid_scopes",
      invalid_scopes: invalidScopes,
      allowed_scopes: Array.from(ALLOWED_SCOPES),
    });
  }

  const showDialog = req.query.show_dialog === "true" ? "true" : "false";

  // URLSearchParams#toString converts this object to a query string.
  return res.redirect(
    "https://accounts.spotify.com/authorize?" +
      new URLSearchParams({
        response_type: "code",
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
        scope: requestedScopes.join(" "),
        show_dialog: showDialog,
      }).toString()
  );
};

export default login;