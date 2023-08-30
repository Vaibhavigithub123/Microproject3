// const foodOriginalData = [
//     {
//       "id": 1,
//       "foodname": "Apple",
//       "calorie": 95,
//       "category": "Fruit",
//       "protiens": 0.3,
//       "cab": 25
//     },
//     {
//       "id": 2,
//       "foodname": "Banana",
//       "calorie": 105,
//       "category": "Fruit",
//       "protiens": 1.3,
//       "cab": 27
//     },
//     {
//       "id": 3,
//       "foodname": "Orange",
//       "calorie": 62,
//       "category": "Fruit",
//       "protiens": 1.2,
//       "cab": 15
//     },
//     {
//       "id": 4,
//       "foodname": "Pear",
//       "calorie": 95,
//       "category": "Fruit",
//       "protiens": 0.5,
//       "cab": 25
//     },
//     {
//       "id": 5,
//       "foodname": "Grapefruit",
//       "calorie": 42,
//       "category": "Fruit",
//       "protiens": 1.1,
//       "cab": 11
//     },
//     {
//       "id": 6,
//       "foodname": "Strawberry",
//       "calorie": 46,
//       "category": "Fruit",
//       "protiens": 1.5,
//       "cab": 10
//     },
//     {
//       "id": 7,
//       "foodname": "Blueberry",
//       "calorie": 52,
//       "category": "Fruit",
//       "protiens": 1.1,
//       "cab": 14
//     },
//     {
//       "id": 8,
//       "foodname": "Raspberry",
//       "calorie": 52,
//       "category": "Fruit",
//       "protiens": 1.4,
//       "cab": 15
//     },
//     {
//       "id": 9,
//       "foodname": "Broccoli",
//       "calorie": 34,
//       "category": "Vegetable",
//       "protiens": 3.3,
//       "cab": 5
//     },
//     {
//       "id": 10,
//       "foodname": "Cauliflower",
//       "calorie": 25,
//       "category": "Vegetable",
//       "protiens": 2.6,
//       "cab": 5
//     },
//     {
//       "id": 11,
//       "foodname": "Green Beans",
//       "calorie": 31,
//       "category": "Vegetable",
//       "protiens": 2.4,
//       "cab": 4
//     },
//     {
//       "id": 12,
//       "foodname": "Asparagus",
//       "calorie": 20,
//       "category": "Vegetable",
//       "protiens": 2.2,
//       "cab": 2
//     },
//     {
//       "id": 13,
//       "foodname": "Spinach",
//       "calorie": 23,
//       "category": "Vegetable",
//       "protiens": 3.5,
//       "cab": 4
//     },
//     {
//       "id": 14,
//       "foodname": "Kale",
//       "calorie": 33,
//       "category": "Vegetable",
//       "protiens": 4.3,
//       "cab": 7
//     },
//     {
//       "id": 15,
//       "foodname": "Sweet Potato",
//       "calorie": 103,
//       "category": "Vegetable",
//       "protiens": 2,
//       "cab": 27
//     },
//     {
//       "id": 16,
//       "foodname": "Potato",
//       "calorie": 161,
//       "category": "Vegetable",
//       "protiens": 4.3,
//       "cab": 37
//     },
//     {"id": 17,
//       "foodname": "Carrot",
//       "calorie": 41,
//       "category": "Vegetable",
//       "protiens": 0.9,
//       "cab": 9
//     },
//     {
//       "id": 18,
//       "foodname": "Onion",
//       "calorie": 40,
//       "category": "Vegetable",
//       "protiens": 1.4,
//       "cab": 9
//     },
//     {
//       "id": 19,
//       "foodname": "Egg",
//       "calorie": 77,
//       "category": "Protein",
//       "protiens": 6.3,
//       "cab": 0.5
//     },
//     {
//       "id": 20,
//       "foodname": "Chicken Breast",
//       "calorie": 165,
//       "category": "Protein",
//       "protiens": 31,
//       "cab": 0
//     },
//     {
//       "id": 21,
//       "foodname": "Salmon",
//       "calorie": 206,
//       "category": "Protein",
//       "protiens": 22,
//       "cab": 0
//     },
//     {
//       "id": 22,
//       "foodname": "Tuna",
//       "calorie": 179,
//       "category": "Protein",
//       "protiens": 39,
//       "cab": 0
//     },
//     {
//       "id": 23,
//       "foodname": "Beef",
//       "calorie": 250,
//       "category": "Protein",
//       "protiens": 26,
//       "cab": 0
//     },
//     {
//       "id": 24,
//       "foodname": "Pork",
//       "calorie": 242,
//       "category": "Protein",
//       "protiens": 26,
//       "cab": 0
//     },
//     {
//       "id": 25,
//       "foodname": "Lamb",
//       "calorie": 294,
//       "category": "Protein",
//       "protiens": 25,
//       "cab": 0
//     },
//     {
//       "id": 26,
//       "foodname": "Shrimp",
//       "calorie": 85,
//       "category": "Protein",
//       "protiens": 20,
//       "cab": 0.2
//     },
//     {
//       "id": 27,
//       "foodname": "Quinoa",
//       "calorie": 120,
//       "category": "Grain",
//       "protiens": 4.4,
//       "cab": 21
//     },
//     {
//       "id": 28,
//       "foodname": "Brown Rice",
//       "calorie": 216,
//       "category": "Grain",
//       "protiens": 4.5,
//       "cab": 45
//     },
//     {
//       "id": 29,
//       "foodname": "Oats",
//       "calorie": 389,
//       "category": "Grain",
//       "protiens": 16.9,
//       "cab": 66
//     },
//     {
//       "id": 30,
//       "foodname": "Quinoa",
//       "calorie": 120,
//       "category": "Grain",
//       "protiens": 4.4,
//       "cab": 21
//     },
//     {
//       "id": 31,
//       "foodname": "Bread",
//       "calorie": 265,
//       "category": "Grain",
//       "protiens": 9.4,
//       "cab": 49
//     },
//     {
//       "id": 32,
//       "foodname": "Pasta",
//       "calorie": 131,
//       "category": "Grain",
//       "protiens": 5.5,
//       "cab": 26
//     },
//     {
//       "id": 33,
//       "foodname": "Milk",
//       "calorie": 60,
//       "category": "Dairy",
//       "protiens": 3.2,
//       "cab": 5.1
//     },
//     {
//       "id": 34,
//       "foodname": "Cheese",
//       "calorie": 402,
//       "category": "Dairy",
//       "protiens": 25,
//       "cab": 2.4
//     },
//     {
//       "id": 35,
//       "foodname": "Yogurt",
//       "calorie": 59,
//       "category": "Dairy",
//       "protiens": 3.5,
//       "cab": 5
//     },
//     {
//       "id": 36,
//       "foodname": "Butter",
//       "calorie": 717,
//       "category": "Dairy",
//       "protiens": 0.9,
//       "cab": 0.1
//     },
//     {
//       "id": 37,
//       "foodname": "Almonds",
//       "calorie": 579,
//       "category": "Nuts",
//       "protiens": 21,
//       "cab": 22
//     },
//     {
//       "id": 38,
//       "foodname": "Walnuts",
//       "calorie": 654,
//       "category": "Nuts",
//       "protiens": 15,
//       "cab": 14
//     },
//     {
//       "id": 39,
//       "foodname": "Peanuts",
//       "calorie": 567,
//       "category": "Nuts",
//       "protiens": 26,
//       "cab": 16
//     },
//     {
//       "id": 40,
//       "foodname": "Cashews",
//       "calorie": 553,
//       "category": "Nuts",
//       "protiens": 18,
//       "cab": 30
//     }
//   ];

//   function getAllFoodData(){
//     for(let index=0; index<foodOriginalData.length; index++){
//     console.log(foodOriginalData[index]);
//     }
//   }
  
//   function getAllVegetablesData(){
//     for(let index=0; index < foodOriginalData.length ; index++){
//       const category=foodOriginalData[index].category;
//       if(category === "Vegetable"){
//         console.log(foodOriginalData[index]);
//       }
//     }

//   }

//   function getAllFoodDataViaFilter(){
//     const newArr = foodOriginalData.filter((item) => item.category === "Vegetable")
//     console.log(newArr);
//   }

//   function getAllFruitDataviaFilter(){
//     const newArr = foodOriginalData.filter((item) =>item.category === "Fruit")
//     console.log(newArr);
//   }


//   function getAllProteinDataviaFilter(){
//     const newArr = foodOriginalData.filter((item)=>item.category==="Protein")
//     console.log(newArr);
//   }

//   function getAllNutsDataviafilter(){
//     const newArr = foodOriginalData.filter((item)=>item.category==="Nuts")
//     console.log(newArr);
//   }

//   function getAllGrainDataviaFilter(){
//     const newArr = foodOriginalData.filter((item)=>item.category==="Grain")
//     console.log(newArr);
//   }

//   function getAllDairyDataviaFilter(){
//     const newArr = foodOriginalData.filter((item)=>item.category==="Dairy")
//     console.log(newArr);
//   }

//   function getAllCalorieAboveDataviaFilter(){
//     const newArr = foodOriginalData.filter((item)=>item.calorie>100)
//     console.log(newArr);
//   }

//   function getAllCalorieBelowDataviaFilter(){
//     const newArr = foodOriginalData.filter((item)=>item.calorie<100)
//     console.log(newArr);
//   }


//   // let sortedProductsCab = foodOriginalData.sort(
//   //   (p1, p2) => (p1.cab < p2.cab) ? 1 : (p1.cab > p2.cab) ? -1 : 0);

//   // console.log("All the food items with lowest cab content to highest")
//   // console.log(sortedProductsCab);

//   function sortedProductsCab(foodOriginalData){
//   return Object.entries(foodOriginalData).sort((a,b) => b[1]-a[1])
  
// }
// console.log(sortedProductsCab);


// // //list All the food items with lowest cab content to highest
// // let sortedProductsProtien= foodOriginalData.sort(
// //   (p1, p2) => (p1.protiens > p2.protiens) ? 1 : (p1.protiens < p2.protiens) ? -1 : 0);

// // console.log("All the food items with highest protien content to lowest")
// // console.log(sortedProductsProtien);

const foodOriginalData = [
  {
      "id": 1,
      "foodname": "Apple",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.3,
      "cab": 25
  },
  {
      "id": 2,
      "foodname": "Banana",
      "calorie": 105,
      "category": "Fruit",
      "protiens": 1.3,
      "cab": 27
  },
  {
      "id": 3,
      "foodname": "Orange",
      "calorie": 62,
      "category": "Fruit",
      "protiens": 1.2,
      "cab": 15
  },
  {
      "id": 4,
      "foodname": "Pear",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.5,
      "cab": 25
  },
  {
      "id": 5,
      "foodname": "Grapefruit",
      "calorie": 42,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 11
  },
  {
      "id": 6,
      "foodname": "Strawberry",
      "calorie": 46,
      "category": "Fruit",
      "protiens": 1.5,
      "cab": 10
  },
  {
      "id": 7,
      "foodname": "Blueberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 14
  },
  {
      "id": 8,
      "foodname": "Raspberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.4,
      "cab": 15
  },
  {
      "id": 9,
      "foodname": "Broccoli",
      "calorie": 34,
      "category": "Vegetable",
      "protiens": 3.3,
      "cab": 5
  },
  {
      "id": 10,
      "foodname": "Cauliflower",
      "calorie": 25,
      "category": "Vegetable",
      "protiens": 2.6,
      "cab": 5
  },
  {
      "id": 11,
      "foodname": "Green Beans",
      "calorie": 31,
      "category": "Vegetable",
      "protiens": 2.4,
      "cab": 4
  },
  {
      "id": 12,
      "foodname": "Asparagus",
      "calorie": 20,
      "category": "Vegetable",
      "protiens": 2.2,
      "cab": 2
  },
  {
      "id": 13,
      "foodname": "Spinach",
      "calorie": 23,
      "category": "Vegetable",
      "protiens": 3.5,
      "cab": 4
  },
  {
      "id": 14,
      "foodname": "Kale",
      "calorie": 33,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 7
  },
  {
      "id": 15,
      "foodname": "Sweet Potato",
      "calorie": 103,
      "category": "Vegetable",
      "protiens": 2,
      "cab": 27
  },
  {
      "id": 16,
      "foodname": "Potato",
      "calorie": 161,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 37
  },
  {
      "id": 17,
      "foodname": "Carrot",
      "calorie": 41,
      "category": "Vegetable",
      "protiens": 0.9,
      "cab": 9
  },
  {
      "id": 18,
      "foodname": "Onion",
      "calorie": 40,
      "category": "Vegetable",
      "protiens": 1.4,
      "cab": 9
  },
  {
      "id": 19,
      "foodname": "Egg",
      "calorie": 77,
      "category": "Protein",
      "protiens": 6.3,
      "cab": 0.5
  },
  {
      "id": 20,
      "foodname": "Chicken Breast",
      "calorie": 165,
      "category": "Protein",
      "protiens": 31,
      "cab": 0
  },
  {
      "id": 21,
      "foodname": "Salmon",
      "calorie": 206,
      "category": "Protein",
      "protiens": 22,
      "cab": 0
  },
  {
      "id": 22,
      "foodname": "Tuna",
      "calorie": 179,
      "category": "Protein",
      "protiens": 39,
      "cab": 0
  },
  {
      "id": 23,
      "foodname": "Beef",
      "calorie": 250,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
  },
  {
      "id": 24,
      "foodname": "Pork",
      "calorie": 242,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
  },
  {
      "id": 25,
      "foodname": "Lamb",
      "calorie": 294,
      "category": "Protein",
      "protiens": 25,
      "cab": 0
  },
  {
      "id": 26,
      "foodname": "Shrimp",
      "calorie": 85,
      "category": "Protein",
      "protiens": 20,
      "cab": 0.2
  },
  {
      "id": 27,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
  },
  {
      "id": 28,
      "foodname": "Brown Rice",
      "calorie": 216,
      "category": "Grain",
      "protiens": 4.5,
      "cab": 45
  },
  {
      "id": 29,
      "foodname": "Oats",
      "calorie": 389,
      "category": "Grain",
      "protiens": 16.9,
      "cab": 66
  },
  {
      "id": 30,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
  },
  {
      "id": 31,
      "foodname": "Bread",
      "calorie": 265,
      "category": "Grain",
      "protiens": 9.4,
      "cab": 49
  },
  {
      "id": 32,
      "foodname": "Pasta",
      "calorie": 131,
      "category": "Grain",
      "protiens": 5.5,
      "cab": 26
  },
  {
      "id": 33,
      "foodname": "Milk",
      "calorie": 60,
      "category": "Dairy",
      "protiens": 3.2,
      "cab": 5.1
  },
  {
      "id": 34,
      "foodname": "Cheese",
      "calorie": 402,
      "category": "Dairy",
      "protiens": 25,
      "cab": 2.4
  },
  {
      "id": 35,
      "foodname": "Yogurt",
      "calorie": 59,
      "category": "Dairy",
      "protiens": 3.5,
      "cab": 5
  },
  {
      "id": 36,
      "foodname": "Butter",
      "calorie": 717,
      "category": "Dairy",
      "protiens": 0.9,
      "cab": 0.1
  },
  {
      "id": 37,
      "foodname": "Almonds",
      "calorie": 579,
      "category": "Nuts",
      "protiens": 21,
      "cab": 22
  },
  {
      "id": 38,
      "foodname": "Walnuts",
      "calorie": 654,
      "category": "Nuts",
      "protiens": 15,
      "cab": 14
  },
  {
      "id": 39,
      "foodname": "Peanuts",
      "calorie": 567,
      "category": "Nuts",
      "protiens": 26,
      "cab": 16
  },
  {
      "id": 40,
      "foodname": "Cashews",
      "calorie": 553,
      "category": "Nuts",
      "protiens": 18,
      "cab": 30
  }
];

const foodListElement = document.getElementById('foodList');
function createFoodListItem(food) {
  const listItem = document.createElement('li');
  listItem.textContent = `${food.id} - ${food.foodname} - Calories: ${food.calorie} - category: ${food.category} - protiens: ${food.protiens} - cab: ${food.cab}`;
  return listItem;
}
foodOriginalData.forEach(food => {
  const listItem = createFoodListItem(food);
  foodListElement.appendChild(listItem);
});
console.log("Food List:");
foodOriginalData.forEach(food => {
  console.log(`${food.id} - ${food.foodname} - Calories: ${food.calorie} - category: ${food.category} - protiens: ${food.protiens} - cab: ${food.cab}`);
});




const vegetableFoodListElement = document.getElementById('vegetableFoodList');
function createFoodListItem(food) {
  const listItem = document.createElement('li');
  listItem.textContent = `${food.id} - ${food.foodname} - Calories: ${food.calorie} - category: ${food.category} - protiens: ${food.protiens} - cab: ${food.cab}`;
  return listItem;
}
const vegetableFoods = foodOriginalData.filter(food => food.category === 'Vegetable');
vegetableFoods.forEach(food => {
  const listItem = createFoodListItem(food);
  vegetableFoodListElement.appendChild(listItem);
});
console.log("Vegetable Food List:");
vegetableFoods.forEach(food => {
  console.log(`${food.id} - ${food.foodname} - Calories: ${food.calorie} - category: ${food.category} - protiens: ${food.protiens} - cab: ${food.cab}`);
});




const fruitFoodListElement = document.getElementById('fruitFoodList');
function createFoodListItem(food) {
  const listItem = document.createElement('li');
  listItem.textContent = `${food.id} - ${food.foodname} - Calories: ${food.calorie} - category: ${food.category} - protiens: ${food.protiens} - cab: ${food.cab}`;
  return listItem;
}
const fruitFoods = foodOriginalData.filter(food => food.category === 'Fruit');
fruitFoods.forEach(food => {
  const listItem = createFoodListItem(food);
  fruitFoodListElement.appendChild(listItem);
});
console.log("Fruit Food List:");
fruitFoods.forEach(food => {
  console.log(`${food.id} - ${food.foodname} - Calories: ${food.calorie} - category: ${food.category} - protiens: ${food.protiens} - cab: ${food.cab}`);
});




const protienFoodListElement = document.getElementById('protienFoodList');
function createFoodListItem(food) {
  const listItem = document.createElement('li');
  listItem.textContent = `${food.id} - ${food.foodname} - Calories: ${food.calorie} - category: ${food.category} - protiens: ${food.protiens} - cab: ${food.cab}`;
  return listItem;
}
const protienFoods = foodOriginalData.filter(food => food.category === 'Protein');
protienFoods.forEach(food => {
  const listItem = createFoodListItem(food);
  protienFoodListElement.appendChild(listItem);
});
console.log("Protien Food List:");
protienFoods.forEach(food => {
  console.log(`${food.id} - ${food.foodname} - Calories: ${food.calorie} - category: ${food.category} - protiens: ${food.protiens} - cab: ${food.cab}`);
});
