function handleRequest(req, res) {

    if (req.url === "/status" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            robot: "online",
            status: "ready"
        }));

    } else {
        res.writeHead(404);
        res.end("Route not found");
    }
}

module.exports = handleRequest;
