export const responses = {
    missingCredentials: {
        status: 400,
        body: { error: 'Missing username, email or password' }
    },
    usernameTaken: {
        status: 409,
        body: { error: 'Username already taken' }
    },
    invalidCredentials: {
        status: 401,
        body: { error: 'Invalid credentials' }
    },
    userRegistered: {
        status: 201,
        body: { message: 'User registered' }
    }
};