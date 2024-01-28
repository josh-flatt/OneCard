const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    // target: "https://localhost:7026",
    target: "https://onecard.azurewebsites.net/weatherforecast",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
