const fp = require("fastify-plugin");
const path = require("path");

async function plugin(app, options) {
  app.register(require("@fastify/static"), {
    root: path.join(__dirname, "..", "dist"),
    prefix: "/",
  });
}

module.exports = fp(plugin, {
  name: "static",
});
