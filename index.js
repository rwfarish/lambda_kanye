const Axios = require("axios");

exports.handler = (event, context, callback) => {
  Axios.get("https://api.kanye.rest/")
    .then((resp) =>
      callback(null, { statusCode: 200, body: JSON.stringify(resp.data) })
    )
    .catch((error) => callback(error));
};
