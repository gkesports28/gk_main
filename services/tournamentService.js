const { convertISTTOUTC } = require("../utils/timeUtil");
const moment = require("moment");

exports.getTournamentStatus = (startTime, endTime) => {
  // const currentDate = moment.utc().toDate(); old code
  const currentDate = new Date(); // new code
  if (startTime > currentDate) {
    return "upcoming";
  } else if (startTime <= currentDate && currentDate <= endTime) {
    // console.log("Tournament is live:", tournament._id);
    return "live";
  } else if (endTime < currentDate) {
    // console.log("Tournament is past:", tournament._id);
    return "past";
  } else {
    // console.log("No updates needed for tournament:", tournament._id);
  }
};
