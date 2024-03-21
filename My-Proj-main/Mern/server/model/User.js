import mongoose  from 'mongoose';

const userSchema = mongoose.Schema({

    iss: { type: String, }, // Issuer - the organization that issues the token
    nbf: { type: Number, }, // Not Before - the time before which the token must not be accepted for processing
    aud: { type: String,},  // Audience - who is intended to receive the token
    sub: { type: String, } ,// Subject - the individual for whom the
    email: {type:String},   // Email of the User (optional)
    email_verified: {type: Boolean},
    azp:  {type:String}, 
    name: { type: String, required: true },
    picture: { type: String , required: true},
    given_name:  {type:String},
    family_name: {type:String},
    iat:  { type: Number, }, //Issued At - time at which the token was issued
    exp:  { type: Number, }, // Expiration Time - after this time the token should not be accepted
    jti:  { type: String}     //JWT ID - a unique identifier for the JWT
})

const user = mongoose.model( "User", userSchema );
export default user;