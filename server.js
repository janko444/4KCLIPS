import express from "express";
import multer from "multer";
import { exec } from "child_process";
import fs from "fs";

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/enhance", upload.single("video"), async (req, res) => {

  const inputPath = req.file.path;
  const outputPath = `output/${Date.now()}.mp4`;

  // 1. extract frames
  exec(`ffmpeg -i ${inputPath} frames/frame_%04d.png`, async () => {

    // 2. AI upscale (tu podpinamy model)
    // np. Real-ESRGAN przez API lub Python script

    exec(`python enhance_frames.py`, () => {

      // 3. rebuild video
      exec(`ffmpeg -framerate 30 -i enhanced/frame_%04d.png ${outputPath}`, () => {
        res.download(outputPath);
      });

    });

  });

});

app.listen(3000);
