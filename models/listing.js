const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }

});


module.exports = mongoose.model("Listing", listingSchema);




// filename: {
//       type: String,
//       default: "default-img", // optional fallback
//     },
//     url: {
//       type: String,
//       default:
//         "https://unsplash.com/photos/landscape-photography-of-seashore-under-cumulus-clouds-U6t8bTWJ1DM",
//       set: (v) =>
//         v === ""
//           ? "https://unsplash.com/photos/landscape-photography-of-seashore-under-cumulus-clouds-U6t8bTWJ1DM"
//           : v,
//     },
