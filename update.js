const mongoose = require("mongoose");
const Listing = require("./models/listing.js"); // Adjust path as needed

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const updates = [
  { id: "68ad66161ddc14c2c5d98a39", newUrl: "https://unsplash.com/photos/a-castle-sitting-on-top-of-a-cliff-next-to-the-ocean-2IANV4if3u8" },
  { id: "68ad66161ddc14c2c5d98a3a", newUrl: "https://unsplash.com/photos/brown-wooden-chair-near-green-tree-during-daytime-e9t42C3oGMc" },
  { id: "68ad66161ddc14c2c5d98a3b", newUrl: "https://unsplash.com/photos/dome-tent-on-mountain-top-with-sun-as-background-photo-ebnlHkqfUHY" },
  { id: "68ad66161ddc14c2c5d98a3c", newUrl: "https://unsplash.com/photos/a-wooden-bench-sitting-on-the-shore-of-a-lake-AlGjRpWrlKs" },
  { id: "68ad66161ddc14c2c5d98a3d", newUrl: "https://unsplash.com/photos/brown-and-white-wooden-outdoor-lounge-chairs-near-swimming-pool-during-daytime-pQrXggKVvzI" },
  { id: "68ad66161ddc14c2c5d98a3e", newUrl: "https://unsplash.com/photos/brown-wooden-table-and-chairs-on-brown-wooden-deck-near-body-of-water-during-daytime-TAgGZWz6Qg8" },
  { id: "68ad66161ddc14c2c5d98a3f", newUrl: "https://unsplash.com/photos/a-view-from-terrace-of-modern-hotel-with-garden-pond-MwSVEf7e3Y0" },
  { id: "68ad66161ddc14c2c5d98a40", newUrl: "https://unsplash.com/photos/brown-nipa-hut-near-palm-trees-and-body-of-water-during-daytime-s3o2rkTkF7I" },
  { id: "68ad66161ddc14c2c5d98a41", newUrl: "https://unsplash.com/photos/a-large-white-house-with-a-lot-of-windows-_T1grVPB3oM" },
  { id: "68ad66161ddc14c2c5d98a42", newUrl: "https://unsplash.com/photos/aerial-view-of-houses-and-trees-during-daytime-by20jAU_w9s" },
  { id: "68ad66161ddc14c2c5d98a43", newUrl: "https://unsplash.com/photos/a-river-running-through-a-lush-green-forest-mI61QKkWU_c" },
  { id: "68ad66161ddc14c2c5d98a44", newUrl: "https://unsplash.com/photos/a-house-with-a-thatched-roof-overlooks-the-ocean-M3xkDxubi28" },
  { id: "68ad66161ddc14c2c5d98a45", newUrl: "https://unsplash.com/photos/a-living-room-with-a-checkered-floor-and-a-couch-beHd9WifKEg" },
  { id: "68ad66161ddc14c2c5d98a46", newUrl: "https://unsplash.com/photos/a-pool-with-people-in-it-by-a-building-with-a-roof-hCWvC95hPW8" },
  { id: "68ad66161ddc14c2c5d98a47", newUrl: "https://unsplash.com/photos/green-trees-beside-body-of-water-during-daytime-HB9VbFHs0MI" },
  { id: "68ad66161ddc14c2c5d98a48", newUrl: "https://unsplash.com/photos/a-stone-building-with-a-pergolated-roof-l4R6G13ks_Y" },
  { id: "68ad66161ddc14c2c5d98a49", newUrl: "https://unsplash.com/photos/a-lake-surrounded-by-lush-green-hills-and-trees-aZcRBBwfglE" },
  { id: "68ad66161ddc14c2c5d98a4a", newUrl: "https://unsplash.com/photos/brown-wooden-nipa-hut-with-green-and-red-trees-mr4XVfz3j2s" },
  { id: "68ad66161ddc14c2c5d98a4b", newUrl: "https://unsplash.com/photos/a-group-of-buildings-and-trees-SL8ZpfUyOAU" },
  { id: "68ad66161ddc14c2c5d98a4c", newUrl: "https://unsplash.com/photos/a-beach-with-people-and-trees-LN6gEX0Df-c" },
  // Add more IDs and URLs as needed
];

async function updateMultipleImages() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    for (const update of updates) {
  await Listing.findByIdAndUpdate(update.id, {
    image: {
      filename: "listingimage", // keep consistent with schema
      url: update.newUrl
    }
  });
  console.log(`Updated listing ${update.id} with new image URL.`);
}


    await mongoose.disconnect();
    console.log("All updates completed.");
  } catch (error) {
    console.error("Error updating listings:", error);
  }
}

updateMultipleImages();
