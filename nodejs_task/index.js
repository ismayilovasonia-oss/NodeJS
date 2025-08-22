const express = require("express");
const app = express();
const PORT = 3000

app.use(express.json());

app.get("/hello",(req, res) => {
    res.send("Hello from Get request!");
});

app.post("/hello", (req, res) => {
    const data = req.body; 
    res.json({
     message: "hello from POST request",
     receivedData: data
    });
});

app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});
"C:\Users\NCAFE\OneDrive\Masaüstü\taskk\index.js"