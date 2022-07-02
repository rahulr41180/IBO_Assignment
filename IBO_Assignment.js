
/*

You have been given a list of products which is having property productName, quantity and description.

PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}

2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

// getUniqueProductCount function

const getUniqueProductCount = (items) => {
  let productObj = {};
  for(let i = 0; i<items.length; i++) {
    if(productObj[items[i].productName] === undefined) {
      productObj[items[i].productName] = 1;
    }
    else {
      productObj[items[i].productName] += 1;
    }
  }
  return productObj;
}
let productsCount = getUniqueProductCount(listOfProducts);
console.log(productsCount);

// getUniqueProducts Function

const getUniquePrducts = (items) => {
    let productObj = [items[0]];
    for(let i = 1; i<items.length; i++) {
  	let flag = false;
  	for(let j = 0; j<productObj.length; j++) {
    	if(items[i].productName === productObj[j].productName) {
      	    productObj[j]["quantity"] += items[i].quantity;
            flag = true;
            break;
        }
    }
    if(flag === false) {
    	productObj.push(items[i]);
    }
  }
  return productObj;
}

let uniqueProducts = getUniquePrducts(listOfProducts);
console.log(uniqueProducts);