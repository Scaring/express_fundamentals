const express = require('express');

const {
  getAllTours,
  getById,
  postTour,
  patchTour,
  deleteTour,
} = require('./routes');

const app = express();

app.use(express.json());

app.route('/api/v1/tours').get(getAllTours).post(postTour);
app.route('/api/v1/tours/:id').get(getById).patch(patchTour).delete(deleteTour);

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getById);
// app.post('/api/v1/tours', postTour);
// app.patch('/api/v1/tours/:id', patchTour);
// app.delete('/api/v1/tours/:id', deleteTour);

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port: ${port}...`);
});
