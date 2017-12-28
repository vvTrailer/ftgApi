// Initialize  objects
const functions = {};

// Returns configuration for data base connection
functions.dbconfig = function (lang) {
    console.log('Connection to db: ' + lang);

    let databases = {};
    let users = {};
    let passwords = {};
    let servers = {};
    let config = {};
    if (process.env.NODE_ENV === 'production') {
        databases = {
            no: 'FBSCORE_NO',
            dk: 'FBSCORE_DK',
            se: 'FBSCORE_SE',
            de: 'FBSCORE_DE',
            pl: 'FBSCORE_PL',
            us: 'FBSCORE_US',
            fi: 'FBSCORE_FI',
            payment: 'FTBSPayment'
        };
        config = {
            user: 'sa',
            password: "nCxWa'qu;6l/D_[$", //FreeFlahvjF31!
            server: 'leia.ftgroup.dk', // You can use 'localhost\\instance' to connect to named instance
            database: databases[lang],
            connectionTimeout: 300000,
            requestTimeout: 300000,
            pool: {
                idleTimeoutMillis: 300000,
                max: 100
            }
        };
    } else if (process.env.NODE_ENV === 'staging') {
        databases = {
            no: 'FBSCORE_NO',
            dk: 'FBSCORE_DK',
            se: 'FBSCORE_SE',
            de: 'FBSCORE_DE',
            pl: 'FBSCORE_PLTEST',
            us: 'FBSCORE_USTEST',
            fi: 'FBSCORE_FITEST',
            payment: 'FTBSPaymentTest'
        };
        users = {
            no: 'FT_SYS_FISH_NO',
            dk: 'FT_SYS_FISH_DK',
            se: 'FT_SYS_FISH_SE',
            de: 'FT_SYS_FISH_DE',
            pl: 'sa',
            us: 'sa',
            fi: 'sa'
        };

        passwords = {
            no: '!FishNO2017',
            dk: '!FishDK2017',
            se: '!FishSE2017',
            de: '!FishDE2017',
            pl: 'Test01.FreeTrailer',
            us: 'Test01.FreeTrailer',
            fi: 'Test01.FreeTrailer'
        };

        servers = {
            no: '81.7.177.26',
            dk: '81.7.177.26',
            se: '81.7.177.26',
            de: '81.7.177.26',
            pl: '81.7.137.20',
            us: '81.7.137.20',
            fi: '81.7.137.20'
        };
        config = {
            user: users[lang],
            password: passwords[lang],
            server: servers[lang], // You can use 'localhost\\instance' to connect to named instance
            database: databases[lang],
            connectionTimeout: 300000,
            requestTimeout: 300000,
            pool: {
                idleTimeoutMillis: 300000,
                max: 100
            }
        };
    } else {
        databases = {
            no: 'FBSCORE_NO',
            dk: 'FBSCORE_DK',
            se: 'FBSCORE_SE',
            de: 'FBSCORE_DE'
        };

        config = {
            user: 'sa',
            password: 'anarchy-helena-means',
            server: '62.116.194.242', // You can use 'localhost\\instance' to connect to named instance
            database: databases[lang],
            connectionTimeout: 300000,
            requestTimeout: 300000,
            pool: {
                idleTimeoutMillis: 300000,
                max: 100
            }
        };
    }
    return config;
};

// Export objects
module.exports = functions;