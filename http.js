const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Hey you landed in our About Page");
  }

  else{
    res.end(`
    <h1>Oops</h1>
    <p>The page you are looking for could not be found</p>
    <a href="/">Back Home</a>
    `);
}
});
server.listen(3001,"localhost",()=> console.log("Server is listening"));
