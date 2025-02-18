// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const { Tour } = require('../../models');

dotenv.config({ path: '../../config.env' });

const DB = process.env.DATABASE.replace(
  '<DB_PASSWORD>',
  process.env.DB_PASSWORD,
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

//READ JSON
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'),
);

//IMPORT DATA TO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data loaded!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

//CLEAR COLLECTION
const deleteDataFromCollection = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data deleted!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

//CLI WORK
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteDataFromCollection();
}
