const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://animesh:KNlVl9CDDcfmXfF0@cluster0.nrkqb.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

  
const middle= ( req, res, next)=> {

    let presentDate = new Date()
    let DateandTIme = (presentDate.getHours())+ ":" + (presentDate.getMinutes()) + ":" + (presentDate.getSeconds()) + " "
    + (presentDate.getDate( )) + " " + (presentDate.getMonth(+1)) + " " + (presentDate.getFullYear())

let IP =req.ip
let URL = req.originalUrl
console.log(`${DateandTIme}, ${IP}, ${URL}`)

next()
}


module.exports.middle= middle



app.use(middle);

app.use("/", route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
