const express = require("express");
const app = express();
const port = 8000;

// middleware -------------------------
// accept json data
app.use(express.json(), express.urlencoded({ extended: true }))

var faker = require('faker');

class User {
    constructor() {
        this._id = faker._uuid
        this.first_name= faker.name.firstName();
        this.lastname= faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.password = faker.internet.password();
    }
}


class Company {
    constructor() {
        this._id = faker._id
        this.companyname= faker.company.companyName();
        this.companyaddress= {
            streetaddress: faker.address.streetAddress(),
            city :  faker.address.city(),
            state :  faker.address.state(),
            zipCode :  faker.address.zipCode(),
            country :  faker.address.country()
        }

    }
}


// ROUTES to my API ------------------------
app.get("/", (request, response) => {
    // console.log(request);
    // console.log("hello")
    response.send("hello from server.js");
} )

app.get("/api/users/new", (request, response) => {
    response.json(new User());

} )

app.get("/api/company/new", (request, response) => {
    response.json(new Company());

} )

app.get("/api/user/company", (request, response) => {
    response.json(new Company(), new User());
    response.json(new User());
} )

// this needs to below the other code blocks
// ALWAYS AT THE END OF THE FILE
// STARTING A SERVER
app.listen(port, ()=> {
    console.log(`>>>> server started on port ${port} and is listening for REQuests to RESpond to`)
})