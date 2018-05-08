const express = require("express");
const request = require("request");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/forecast/:lat,:lon", (req, res) => {
  const apiKey = "7857e2962c0d52191bc776c54f7a3ee2";
  const lat = req.params.lat;
  const lon = req.params.lon;
  const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;

  request(
    {
      url,
      json: true
    },
    (err, response, body) => {
      res.send(body);
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
