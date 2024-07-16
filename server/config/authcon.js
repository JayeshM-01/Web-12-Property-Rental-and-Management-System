import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-r0wx3cby80nx82rv.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck