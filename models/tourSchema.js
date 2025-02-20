const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name!'],
      trim: true,
      unique: true,
      minlength: [10, 'A tour must have more or equal then 10 chaacters!'],
      maxlength: [40, 'A tour must have less or equal then 40 chaacters!'],
      // validate: [validator.isAlpha, 'Tour must only contain letters!'],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration!'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a maxGroupSixe!'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty!'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult',
      },
    },
    ratingAverage: {
      type: Number,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be delow 5.0'],
      default: 4.5,
    },
    ratingQuantity: { type: Number, default: 0 },
    price: { type: Number, required: [true, 'A tour must have a price!'] },
    priceDiscount: {
      type: Number,
      validate: {
        //FUNCTION POINTS ONLY CURRENT DOC, USE WHEN NEED CONTEXT
        validator: function (val) {
          return val < this.price;
        },
        message: `Price discount ({VALUE}) can't be more then price!`,
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a summary!'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a image cover!'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false, //permanently hide from user
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

//DOCUMENT MIDDLEWARE: runs before .save() and .create()
// tourSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// tourSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next();
// });

//QUERY MIDDLEWARE
//regular expression for all words that starts from "find" - /^find/
// tourSchema.pre('find', function (next) {
tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });
  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} ms`);
  next();
});

//pre agregation middleware
tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  // console.log(this.pipeline());
  next();
});

tourSchema.virtual('durationWeeks').get(function () {
  return Math.round(this.duration / 7);
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
