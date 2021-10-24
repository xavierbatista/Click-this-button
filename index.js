const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join('client/build')));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join('client/build')));
}

//get the initial count
app.get('/count', async (req, res) => {
  try {
    const updatedCount = await pool.query(
      'SELECT count FROM count WHERE count_id = 1',
      []
    );

    const totalCount = updatedCount.rows[0].count;

    res.json({ totalCount }).status(201);
  } catch (error) {
    console.error(error.message);
  }
});

//updates the count
app.put('/count', async (req, res) => {
  try {
    if (typeof req.body.userClicks === 'number') {
      const maxPossibleClicks = 85; //fastest humanly possible clicks in 5 seconds
      const userClicks = Math.min(req.body.userClicks, maxPossibleClicks);
      const updateCount = await pool.query(
        'UPDATE count SET count = count + $1 WHERE count_id = 1 RETURNING *',
        [userClicks]
      );

      const totalCount = updateCount.rows[0].count;
      return res.json({ totalCount }).status(201);
    } else {
      return res.status(500);
    }
  } catch (error) {
    console.error(error.message);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join('client/build/index.html'));
});

app.listen(PORT, () => {
  console.log('Server is listening on port', PORT);
});
