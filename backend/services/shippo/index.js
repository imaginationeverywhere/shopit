const shippo = require("shippo")(process.env.SHIPPO_TOKEN);
const Constants = require("../../utils/constants");

const rateKeyMapper = (rate) =>
  (({
    amount,
    amount_local,
    currency,
    currency_local,
    duration_terms,
    estimated_days,
    provider,
    servicelevel,
    shipment,
    carrier_account,
  }) => ({
    amount,
    amount_local,
    currency,
    currency_local,
    duration_terms,
    estimated_days,
    provider,
    servicelevel,
    shipment,
    carrier_account,
  }))(rate);

const getCarriers = async (addressFrom = {}, addressTo = {}, parcels = []) => {
  try {
    const response = await shippo.shipment.create({
      address_from: addressFrom,
      address_to: addressTo,
      parcels,
      async: false,
    });
    if (response.status === Constants.SUCCESS) {
      const { rates = [] } = response;
      return rates.map((rate) => rateKeyMapper(rate));
    }
  } catch (error) {
    console.log("the error is; =====", error);
  }
};

const createShipment = async ({ shipmentId, carrierId, serviceLevelToken }) => {
  try {
    const shipment = await shippo.shipment.retrieve(shipmentId);
    const response = await shippo.transaction.create({
      shipment: shipment,
      carrier_account: carrierId,
      servicelevel_token: serviceLevelToken,
    });

    if (response.status === Constants.ERROR) {
      throw response.messages;
    }
    return response;
  } catch (error) {
    console.log("Error is ShippoService.createShipment ----", error);
    throw error;
  }
};

const ShippoService = {
  getCarriers,
  createShipment,
};

module.exports = ShippoService;
