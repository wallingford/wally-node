const express = require('express');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 5000;

app.use(session({name:'wallyreact', secret: 'wallys cookbook secret', cookie: { maxAge: 60000 }}));

app.get('/api/message', (req, res) => {

    let sess=req.session;
    if(!sess.count){
        sess.count = 1;
    }
    sess.count++;

    res.send({ express: "You're a knob" + sess.count });
    res.end();

});


app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));