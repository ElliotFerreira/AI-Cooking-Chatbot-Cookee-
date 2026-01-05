import express from "express";
import fetch from "node-fetch"
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/chat", async (req, res) => {
    try {
        const messages = req.body.messages;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model : "gpt-4",
                messages: messages
            })
        });

        const data = await response.json();
        res.json(data);

    } catch(err) {
        console.error(err)
        res.status(500).send("Server error.");
    }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on PORT: ${PORT}`))