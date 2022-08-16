const express = require('express')
const app = express()
const port = 3000

app.get('/age/query', (req, res) => {
  // console.log(req.query.year);
  yy = req.query.year         // taking year from query
  mm = req.query.month        // taking month from query
  dd = req.query.day          // taking day from query
  user = req.query.name       // taking name from query

  if (yy && mm && dd && user) {
    birthDate = `${yy}-${mm}-${dd}`
    DATE = new Date(birthDate).getTime()                    // converting string date to milliseconds
    console.log(DATE)
    var today = new Date().getTime();                       // Todays date
    console.log(today)

    ageDiff = today - DATE                                  // Calculated difference between birthdate and today date in milliseconds
    YEAR = ageDiff / (1000 * 3600 * 24 * 365);                // Converting milliseconds to year
    AGE = Math.floor(YEAR);
    console.log(AGE, " The Diff is ")
    res.status(200).json(`Hello ${user}, You are currently ${AGE} old`);
  }
  else {
    res.status(400).json(`Please Enter the all required values`);

  }


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});