import express from 'express';
import router from "./routes";
import log from './utils/logger';

const app = express();
const port = 8081;

app.use(router);

app.listen(port, () => {
    log.info(`Express is listening at http://localhost:${port}`)
});