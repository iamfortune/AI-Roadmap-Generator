"use strict";
/// <reference path="../global.d.ts" />

const { callGHEndpoint } = require("./utils");
const oauthPlugin = require("@fastify/oauth2");

const CALLBACK_URL = process.env.CALLBACK_URL || "http://localhost:3042";

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app, opts) {
  app.register(oauthPlugin, {
    name: "githubOAuth2",
    credentials: {
      client: {
        id: opts.GITHUB_OAUTH_CLIENT_ID,
        secret: opts.GITHUB_OAUTH_CLIENT_SECRET,
      },
      auth: oauthPlugin.GITHUB_CONFIGURATION,
    },
    startRedirectPath: "/login/github", 
    callbackUri: `${CALLBACK_URL}/login/github/callback`,
    cookie: {
      path: "/",
      secure: true,
      sameSite: "none",
    },
  });

  app.get("/login/github/callback", async (req, res) => {
    try {
      const { token } =
        await app.githubOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
      const githubUser = await callGHEndpoint({
        path: "user",
        accessToken: token.access_token,
        method: "GET",
        body: {},
      });
      const user = {
        username: githubUser.login,
        full_name: githubUser.name,
        image: githubUser.avatar_url,
        email: githubUser.email,
      };

      const userToken = Buffer.from(user.username).toString("base64");

      const redirectUrl = `${CALLBACK_URL}?username=${encodeURIComponent(user.username)}&token=${userToken}`;
      res.redirect(redirectUrl);
    } catch (error) {
      app.log.error(error);
      res.send("Authentication failed");
    }
  });
};
