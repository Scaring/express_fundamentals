const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name!'],
      trim: true,
      unique: true,
    },
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
    },
    ratingAvarage: { type: Number, default: 4.5 },
    ratingQuantity: { type: Number, default: 0 },
    price: { type: Number, required: [true, 'A tour must have a price!'] },
    priceDiscount: Number,
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

//DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function () {
  this.slug = slugify(this.name, { lower: true });
});

tourSchema.virtual('durationWeeks').get(function () {
  return Math.round(this.duration / 7);
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
