const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');
    next();
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/calculator/:op/:a/:b', (req, res) => {
  let a = parseFloat(req.params.a)
  let b = parseFloat(req.params.b);
  console.log("hit"+a+" "+b);
  if(req.params.op=="+")
    res.status(200).json({output: a+b});
  else if(req.params.op=="-")
    res.status(200).json({output: a-b});
  else if(req.params.op=="*")
    res.status(200).json({output: a*b});
  else if(req.params.op=="m"){
      res.status(200).json({output: a%b});
  }
  else if(req.params.op=="d")
    if(b==0)
      res.status(200).json({output: "Error"});
    else
      res.status(200).json({output: a/b});
});



app.listen(port, () => console.log(`Listening on port ${port}`));
