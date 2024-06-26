const fp = require("fastify-plugin");

async function plugin(app, options) {
  app.decorate("afterOAuth2Flow", async (user, externalId, req, res) => {
    req("user", user);
    const loggedInUser = await app.loginUser({
      email: user.email,
      username: user.username,
      externalId,
    });
    app.log.info({ loggedInUser });
    if (app.config.DEV === true) {
      return res.redirect(app.config.PLT_MAIN_URL);
    }
    return res.redirect(app.config.PLT_MAIN_URL);
  });
}

plugin[Symbol.for("skip-override")] = true;

module.exports = fp(plugin, {
  name: "authentication",
});
