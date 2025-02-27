interface tourInterface {
  name: { type: String; trim: true };
  slug: String;
  duration: Number;
  maxGroupSize: Number;
  difficulty: String;
  ratingAverage: Number;
  ratingQuantity: Number;
  price: Number;
  priceDiscount: Number;
  summary: String;
  description: String;
  imageCover: String;
  images: [String];
  createdAt: Date;
  startDates: [Date];
  secretTour: { type: Boolean; default: false };
}

class tourSchema implements tourInterface {
  constructor(name) {
    this.name = name;
  }

  name: String;
  slug: String = `${this.name}`.toLowerCase.split(' ').join('-');
}

// const tourSchema = {
//   name: {
//     type: String;
//     required: [true, 'A tour must have a name!'];
//     trim: true;
//     unique: true;
//     minlength: [10, 'A tour must have more or equal then 10 chaacters!'];
//     maxlength: [40, 'A tour must have less or equal then 40 chaacters!'];
//   };
//   slug: String;
//   duration: {
//     type: Number;
//     required: [true, 'A tour must have a duration!'];
//   };
//   maxGroupSize: {
//     type: Number;
//     required: [true, 'A tour must have a maxGroupSixe!'];
//   };
//   difficulty: {
//     type: String;
//     required: [true, 'A tour must have a difficulty!'];
//     enum: {
//       values: ['easy', 'medium', 'difficult'];
//       message: 'Difficulty is either: easy, medium, difficult';
//     };
//   };
//   ratingAverage: {
//     type: Number;
//     min: [1, 'Rating must be above 1.0'];
//     max: [5, 'Rating must be delow 5.0'];
//     default: 4.5;
//   };
//   ratingQuantity: { type: Number; default: 0 };
//   price: { type: Number; required: [true, 'A tour must have a price!'] };
//   priceDiscount: Number;
//   summary: {
//     type: String;
//     trim: true;
//     required: [true, 'A tour must have a summary!'];
//   };
//   description: {
//     type: String;
//     trim: true;
//   };
//   imageCover: {
//     type: String;
//     required: [true, 'A tour must have a image cover!'];
//   };
//   images: [String];
//   createdAt: Date;
//   startDates: [Date];
//   secretTour: {
//     type: Boolean;
//     default: false;
//   };
// }
