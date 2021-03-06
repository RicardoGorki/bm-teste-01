require("dotenv")

module.exports = {
  "type": "postgres",
  "port": process.env.DB_PORT,
  "host": process.env.DB_HOST,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "migrations": ["./src/database/migrations/*.ts"],
  "entities": ["./src/modules/**/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
