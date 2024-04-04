// Import express
const express = require('express');

// Create Express app
const app = express();

// Set Public directory
app.use(express.static(__dirname + '/public'))

// Define Port
const port = 3000
app.get('/.well-known/discord', (req,res) => {
	res.send("dh=16a691e528e42c85ab5d0073f1d87db29fc3dcf7")
});
// Listen on defined port
app.listen(port, () => {
    console.log(`Web server started!`)
})
