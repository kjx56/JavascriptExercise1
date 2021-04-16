//PART 1
//1
var favoriteFoods = ["Burger & Chips" , "Jollof Rice & Chicken" , " Club sandwich & Soda"];

//2
console.log(favoriteFoods[1]);

//3

favoriteFoods.splice(2,3,"Oreo Overload Ice Cream");
console.log(favoriteFoods);

//4

var formerFavoriteFood = favoriteFoods.splice(0,1);

formerFavoriteFood;

favoriteFoods;

//5
favoriteFoods.push("Chicken Bucket");
favoriteFoods;

//6
favoriteFoods.unshift("Cake");
favoriteFoods;

//7 nothing happens when poping from an empty array

var Emptyarr = [];
Emptyarr.pop("");
Emptyarr;

//8

var nums = [2, 3, 4, 5];
nums.splice(1,1);
nums;

var rays = ["Alpha" , "Gamma" , "Delta"];
rays.splice(1,0,"Beta");
rays;

var Nums2 = [10, -10, -5, -3, 2, 1];
Nums2.splice(1,3,9,8,7,6,5,4,3);
Nums2;

//PART 2

var people = ["Greg" , "Mary", "Devon" , "James"];

//1

for( var i = 0; i < people.length; i++){
   console.log(people[i]);
}

//2 

people.shift();

//3 

people.pop();

//4 

people.unshift("Matt");

//5

people.push("Koye");

//6

for(var i = 0; i < people.length; i++){
   if(people[i] == ["Mary"]) {
      console.log(people[i]);
     
     break;       
   }    
}

// 7

var Copyarr = people.slice(2,4);
Copyarr;

//8

people.indexOf("Mary");

//9

people.indexOf("Foo");

//10

var people = ["Greg" , "Mary", "Devon" , "James"];
 people.splice(2,1,"Elizabeth","Artie");
people;

//11

var withBob = people.concat("Bob");
withBob;

//Part 3

var arr = [];
var arr = ["Adekoyejo"];
arr.push("Shote");
arr.unshift("Black");

arr;

arr.shift();
arr;

var arr2 = [9];
arr2.push("JavaScript");
arr2;

arr2.indexOf(9);

var combinedArr = arr.concat(arr2);

combinedArr;

//Part 4

var arr = ["JavaScript", "Python", "Ruby", "Java"];

//1

arr.pop();
arr.shift();

arr;

//2

var arr2 = ["Haskell","Clojure"];
var arr3;
arr3 = arr.concat(arr2);
arr3;

arr3.unshift("JavaScript");
arr3.splice(3,4, "Java");
arr3;

//3 Passing by value means taking the data of one variable and storing it in another space in memory. Passing by reference means that the two variables now share the same pointer or address in memory so when referring to either variable they are interchangeable.



















