const express = require("express");
const { Console } = require("console");
const console = new Console({ stdout: process.stdout, stderr: process.stderr });

const app = express();
app.use(express.static("."));

app.listen(3000, () => {
      Console.log("App started on port 3000");
});
