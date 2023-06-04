const express = require("express");
const Time = require("../../database/models/time");

const router = express.Router();

// GET all stopwatch times
router.get("/", async (req, res) => {
  try {
    const allStopwatchTimesFromDatabase = await Time.find();

    res.json(allStopwatchTimesFromDatabase);
  } catch (error) {
    return res.status(401).json({
      error: "Could not GET stopwatch times",
    });
  }
});

// POST a new stopwatch time
router.post("/saveStopwatchTime", async (req, res) => {
  try {
    const { time } = req.body;
    // Time will be in milliseconds since that is the best format for Stopwatch time tracking...

    const newTimeToSave = new Time({
      time,
    });

    await newTimeToSave.save();

    res.status(201).json(newTimeToSave);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to save given stopwatch time",
    });
  }
});

module.exports = router;