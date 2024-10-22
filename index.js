// user's array of object
let users= [
        {
            id: 1,
            name: "Goldia Guitel",
            username: "gguitel0",
            email: "gguitel0@oaic.gov.au",
        }, {
            id: 2,
            name: "Salaidh De la Yglesia",
            username: "sde1",
            email: "sde1@geocities.jp"
        }, {
            id: 3,
            name: "Laurence Dabrowski",
            username: "ldabrowski2",
            email: "ldabrowski2@mysql.com"
        }, {
            id: 4,
            name: "Daisey Ilett",
            username: "dilett3",
            email: "dilett3@archive.org"
        }, {
            id: 5,
            "name": "Ruddy Duffyn",
            "username": "rduffyn4",
            "email": "rduffyn4@hc360.com"
        }, {
            id: 6,
            name: "Darla MacKowle",
            username: "dmackowle5",
            email: "dmackowle5@phoca.cz"
        }, {
            id: 7,
            name: "Ralina Beattie",
            username: "rbeattie6",
            email: "rbeattie6@slideshare.net"
        }, {
            id: 8,
            name: "Cesaro Shippey",
            username: "cshippey7",
            email: "cshippey7@xinhuanet.com"
        }, {
            id: 9,
            name: "Ingunna Vanes",
            username: "ivanes8",
            email: "ivanes8@cnn.com"
        }, {
            id: 10,
            name: "Melessa Wareham",
            username: "mwareham9",
            email: "mwareham9@timesonline.co.uk"
        },{
            id: 11,
            name: "Abhay Kumar",
            username: "abhay_kumar",
            email: "abhaykumar@gmail.com",
        },{
            id: 12,
            name: "Awadhesh Kumar",
            username: "awadhesh_kumar",
            email: "awadheshkumar@gmail.com",
        }
    ];

// forEach loop for iterating user's array 
users.forEach(element => {
    // get main div by its id to append the cards
    let container = document.getElementById("container")

    // create a new div to append users information
    let div = document.createElement("div");
    div.classList.add("containt")

    // create p tag to store user's id
    let id = document.createElement("p");
    id.innerText = `Id: ${element.id}`;

    // create h2 tag to store user's name
    let name = document.createElement("h2")
    //add the name dynamically to the h2 tag
    name.innerText = `Name: ${element.name}`;

    // create p tag to store user's email
    let email = document.createElement("p");
    //add the email dynamically to the p tag
    email.innerText = `Email: ${element.email}`;

    // create h4 tag to store user's username
    let username = document.createElement("h4");
    //add the username dynamically to the h4 tag
    username.innerText = `Username: ${element.username}`;

    //append all tags to the div
    div.append(id, name, username, email);
    //append div to the main div container
    container.append(div);

});

//get input form by id and add EvetListener with a function
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    // get main div by its id to append the cards
    let container = document.getElementById("container");
    // create a new div to append users information upon submission
    let containt2 = document.createElement("div");
    //add a clas to add css to it
    containt2.classList.add("containt2");

    //get the user input form data value
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    //add user input value to div
    containt2.innerHTML  = `
        <p>${id}</p>
        <h2>${name}</h2>
        <h4>${username}</h4>
        <p>${email}</p>
    `
    //add user input value to main div container
    container.append(containt2)
    
    //reset the input form upon submission
    document.getElementById("form").reset();
})