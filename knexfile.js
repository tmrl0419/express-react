// Update with your config settings.

require('dotenv').config();

module.exports = {
    development: {
        client : 'pg',
        connection : {
            host: '13.209.187.220',
            user: 'makersmaker',
            password: 'makersmaker',
            database: 'makersmaker',
            port: 5432
        }
    },
    production: {
        client : 'pg',
        connection : {
            host: '13.209.187.220',
            user: 'makersmaker',
            password: 'makersmaker',
            database: 'makersmaker',
            port: 5432
        }
    }
};
