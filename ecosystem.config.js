module.exports = {
  apps: [
    {
      name: "quelhebergeur",
      script: "/home/claude/quelhebergeur/.next/standalone/server.js",
      env: {
        PORT: 3301,
        NODE_ENV: "production",
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
