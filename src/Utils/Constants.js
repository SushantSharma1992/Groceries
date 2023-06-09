export const SavedData = { GROCERIES: "groceries", CART_DATA: "cart" };
export const cacheDataGroceries = "groceriesApp-V1";
export const filesToCache = [
  "build/index.html",
  "build/asset-manifest.json",
  "build/favicon.ico",
  "build/service-worker.js.map",
  "build/service-worker.js.LICENSE.txt",
  "build/service-worker.js",
  "build/robots.txt",
  "build/manifest.json",
  "build/logo512.png",
  "build/logo192.png",
  "build/static/js/787.aedc4bec.chunk.js",
  "build/static/js/787.aedc4bec.chunk.js.map",
  "build/static/js/main.c9633a93.js",
  "build/static/js/main.c9633a93.js.LICENSE.txt",
  "build/static/js/main.c9633a93.js.map",
  "build/static/css/main.d2b2b605.css",
  "build/static/css/main.d2b2b605.css.map",
];

const quantityToPriceMap = new Map();
quantityToPriceMap.set(1, 10);
quantityToPriceMap.set(1, 10);
quantityToPriceMap.set(1, 10);

export const defaultObject2 = {
  id: 0,
  barcode: "",
  brand: "MotherDairy",
  name: "Milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  rates: () => {
    return quantityToPriceMap;
  },
};
export const defaultObject = {
  id: 0,
  barcode: "",
  brand: "MotherDairy",
  name: "Milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  purchaseQuantity: 1,
  rates: [
    { quantity: 1, price: 50 },
    { quantity: 6, price: 40 },
    { quantity: 12, price: 30 },
  ],
};
export const defaultObject3 = {
  id: 3,
  barcode: "",
  brand: "MotherDairy",
  name: "Milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  purchaseQuantity: 1,
  rates: [
    { quantity: 1, price: 50 },
    { quantity: 6, price: 40 },
    { quantity: 12, price: 30 },
  ],
};
export const defaultObject4 = {
  id: 4,
  barcode: "",
  brand: "MotherDairy",
  name: "Milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  purchaseQuantity: 1,
  rates: [
    { quantity: 1, price: 50 },
    { quantity: 6, price: 40 },
    { quantity: 12, price: 30 },
  ],
};
export const defaultObject5 = {
  id: 5,
  barcode: "",
  brand: "MotherDairy",
  name: "Milk",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 500,
  unit: "ml",
  purchaseQuantity: 1,
  rates: [
    { quantity: 1, price: 50 },
    { quantity: 6, price: 40 },
    { quantity: 12, price: 30 },
  ],
};

export const initObject = {
  barcode: "",
  brand: "",
  name: "",
  createdOn: new Date(),
  updatedOn: new Date(),
  weight: 1,
  unit: "ml",
  purchaseQuantity: 1,
  rates: [{ quantity: 1, price: "" }],
};

export const metricChartArray = [
  ["mg", "1"],
  ["Kg", "1000"],
  ["ml", "1"],
  ["ltr", "1000"],
];

export const metricChart = new Map(metricChartArray);
