var config = {
    development: {
    //mongodb connection settings
    database: {
        HOST:   'mongodb+srv://dbUser:123qwerty@cluster0.osr58.mongodb.net/peppo?retryWrites=true',
        PORT:   '27017',
        DB:     'peppo'
    },
    //server details
    server: {
        "BASE_URL": "http://localhost:3000",
        PORT: '3000'
    },
    //stripe configuration
    stripe:{
        "SECRET_KEY":"sk_test_51HebTSFJt1FUFhqgo3THTIyLqZJmGlztWbBMZeeMDJpJdLQnDrPsL6hu1mHejlCH22miMam2ec9tQqy178lFuCs100hEZKWRKP"
    }
},
production: {
    
    //mongodb connection settings
    database: {
        HOST: 'mongodb://localhost:27017',
        PORT: '27017',
        DB:   'peppo'
    },

    //server details
    server: {
        "BASE_URL": "http://localhost:3000",
        PORT:   '3000'
    },

    stripe:{
        "SECRET_KEY":"sk_test_51HebTSFJt1FUFhqgo3THTIyLqZJmGlztWbBMZeeMDJpJdLQnDrPsL6hu1mHejlCH22miMam2ec9tQqy178lFuCs100hEZKWRKP"
    }

}};

module.exports = config