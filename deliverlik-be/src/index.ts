import express, { Request, Response } from "express";

const app = express();
const cors = require("cors");

const whitelist = ["http://localhost:5173"];
app.use(cors({ origin: [...whitelist] }));

app.get("/api/v1/hi", (req: Request, res: Response) => {
  return res.json({
    status: "success",
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
