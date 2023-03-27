const { PORT, 
    DB_CONNECTION, DB_HOST, DB_PORT, DB_NAME, 
    DB_USER, DB_PASS, 
    JWT_AUDIENCE, JWT_ISSUER, JWT_EXPIRESIN, JWT_SECRET } = process.env;

const credentials = DB_USER && DB_PASS ? `${DB_USER}:${DB_PASS}@` : '';

module.exports = {
    port: PORT || 3030,
    dbConnectionString: `${DB_CONNECTION}${credentials}${DB_HOST}:${DB_PORT}/${DB_NAME}?directConnection=true`,
    audience: JWT_AUDIENCE,
    issuer: JWT_ISSUER,
    expiresIn: JWT_EXPIRESIN, 
    secret: JWT_SECRET,
}