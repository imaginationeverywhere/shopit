const Order = require("../models/order");
const fetch = require("node-fetch");
const Constants = require("../utils/constants");

const subscribeForTracking = async ({ carrier, trackingNo, orderId }) => {
  const body = JSON.stringify({
    carrier: "shippo",
    tracking_number: "SHIPPO_TRANSIT",
    metadata: `Order ${orderId}`,
  }); // TODO: please remove me, this for test tracking

  // const body = JSON.stringify({ carrier, tracking_number: trackingNo, metadata: `Order ${orderId}` }) // this should be used for actual integration

  fetch(process.env.SHIPPO_TRACKING_URL, {
    method: "POST",
    body: body,
    headers: {
      Authorization: `ShippoToken ${process.env.SHIPPO_TOKEN}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => console.log("====subscribe for tracking"));
};

const createOrder = async (
  {
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    selectedCarrier,
    paidAt,
    user,
  },
  ShipmentService
) => {
  const order = await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    paidAt,
    user,
  });

  const { carrier, trackingNo } = await ShipmentService.createShipment({
    order,
    selectedCarrier,
  });
  subscribeForTracking({ carrier, trackingNo, orderId: order.id });

  return order;
};

const POSSIBLE_STATUSES = {
  PRE_TRANSIT: 0,
  TRANSIT: 1,
  DELIVERED: 2,
  RETURNED: 3,
  FAILURE: 4,
  UNKNOWN: 5,
};

const STATUS_POS_TO_ORDER_STATUS = {
  0: Constants.PROCESSING,
  1: Constants.SHIPPED,
  2: Constants.DELIVERED,
  3: Constants.RETURNED,
  4: Constants.FAILURE,
};

const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findById(orderId);
  const statusPos = POSSIBLE_STATUSES[status];
  order.orderStatus = STATUS_POS_TO_ORDER_STATUS[statusPos];

  await order.save();
};

const OrderService = {
  createOrder,
  updateOrderStatus,
};

module.exports = OrderService;
