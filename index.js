const fs = require("fs");
const csv = require("csv-parser");
const download = require("image-downloader");

// CSV file containing images URLS; 1 URL per line
let file = "./data.csv";

fs.createReadStream(file)
  .pipe(csv())
  .on("data", function(data) {
    try {
      // Download to a directory and save with the original filename
      const options = {
        url: data.url,
        dest: "./images/" // Directory where images should be saved
      };

      download
        .image(options)
        .then(({ filename, image }) => {
          console.log("File saved to", filename);
        })
        .catch(err => {
          console.error(err);
        });
    } catch (err) {
      /**
       * @todo Handle error
       */
    }
  })
  .on("end", function() {
    /**
     * Finished
     */
  });
