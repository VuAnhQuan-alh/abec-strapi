module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5101),
      database: env("DATABASE_NAME", "abev-strapi"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "monkey1211@#"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
