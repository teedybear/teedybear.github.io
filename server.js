

const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const staticPath = './';
var serverPort = 8080;
const port = process.env.PORT || serverPort;

app = express();
app.set("PORT",PORT)

app.use(serve(path.join(__dirname, staticPath)));

app.listen(port, () => {
    console.log(`[Message]: Server is listening on port ${port}`);
});
