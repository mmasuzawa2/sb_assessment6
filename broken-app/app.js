const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require("./expressError");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/search',async function(req, res, next) {
  try {
    // let results = req.body.username.map(async d => {
    //   return await axios.get(`https://api.github.com/users/${d}`);
    // });
    // let dev = results.map(r => ({ name: r.data.name, bio: r.data.bio }));


    // req.body.username.foreach(async e=>{
    //   let p = await axios.get(`https://api.github.com/users/${e}`);
    //   dev.push({name:p.data.name,bio:p.data.bio});
    // })

    let dev =[]
    for(i of req.body.username){
      let r = await axios.get(`https://api.github.com/users/${i}`);
      if(r.data.message){
        throw ExpressError("error", 404);
      } 
      dev.push({name:r.data.name,bio:r.data.bio});
    }
    
    res.json(dev);

  } catch(e) {
    return next(e);
  }
});

app.use((err,req,res,next) => {
  console.log(err.msg);
  res.send(err.msg);
});


app.listen(3000);
