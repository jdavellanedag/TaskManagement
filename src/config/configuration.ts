export default () => ({
    port: parseInt(process.env.APP_PORT) || 3000,
    database: {
        host: process.env.DB_URL,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_DBNAME,
    }
});