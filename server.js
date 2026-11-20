const http = require("http");

const config = require("./config");
const handleRequest = require("./routes");

const server = http.createServer(handleRequest);

server.listen(config.PORT, config.HOST, () => {
    console.log(
        `Robot HTTP Server running at http://localhost:${config.PORT}`
    );
});
