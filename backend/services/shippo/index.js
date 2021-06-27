// const shippo = require("shippo")(process.env.SHIPPO_TOKEN);
const shippo = require("./mock"); // mock api for shippo
const Constant = require("../../utils/constants");

const getCarriers = async (addressFrom = {}, addressTo = {}, parcel = {}) => {
  const response = await shippo.shipment.create({
    address_from: addressFrom,
    address_to: addressTo,
    parcels: [parcel],
  });
  if (response.status === Constant.SUCCESS) {
    const { rates = [] } = response;
    return rates;
  }
};

const shippoService = {
  getCarriers: getCarriers,
};

module.exports = shippoService;
