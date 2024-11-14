module.exports = {
    apps : [
        {
          name: "graph-election-viz-api",
          script: "./app.js",
          watch: true,
          env: {
            "PORT": 3000,
            "NODE_ENV": "development",
            "DB_ADMIN": "root",
            "DB_PASSWORD": "123QWEasd!@#qweASD"
          },
          env_production: {
            "PORT": 3000,
            "NODE_ENV": "production",
            "DB_ADMIN": "root",
            "DB_PASSWORD": "123QWEasd!@#qweASD"
          }
        }
    ]
  }