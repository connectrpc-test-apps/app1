import * as http2 from 'http2';
import {Greeter} from "./gen/app1_connect.js";
import {connectNodeAdapter} from "@connectrpc/connect-node";

const PORT = process.env.PORT || 3000;

const routes = (router) =>
    router.service(Greeter, {
        async hello() {
            return {
                ts: Date.now(),
            }
        }
    });

http2.createServer(connectNodeAdapter({
    routes
})).listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});