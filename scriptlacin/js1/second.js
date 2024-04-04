// Bir funksiya yazın,string şəklində 2 parametr qəbul etsin.Funksiyanız bu sözlərin anagram olub-olmadığını tapmalıdır. Anagram sözlər yerləri fərqli olsa da eyni hərflərdən təşkil olunmuş sözlərdir.
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let sortedStr1 = str1.split('').sort().join('');
//     let sortedStr2 = str2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
// }

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "words"));   // false

// Bir funksiya yazın. İki parametr qəbul etsin. Biri cümlə digəri isə o cümlə içərisindəki söz olsun. Sizin funksiyanız həmin sözün indeksini tapsın.

// a = function (c, s) {
//   console.log(c.indexOf(s));
// };
// a("Salam Rena", "Rena");

// a = function (c, s) {
//   if (c.includes(s)) {
//     console.log("var");
//   } else {
//     console.log("yoxdu");
//   }
// };

//   a("salam necesiniz sagolun", "sagolun");

// Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.
// sentenceCapitalization("a short sentence")
// Expected Output:
// "A Short Sentence"

// a="a short sentence"
// a=a.split(" ");
// let newStrin=""
// b=" "

// // console.log(a)

// for(i=0;i<a.length;i++){
//   newStrin+=a[i].replace( a[i][0], a[i][0].toUpperCase())+b

// }

// console.log(newStrin)

let originalProducts = [
  {
    id: 4,
    supplierId: 2,
    categoryId: 3,
    quantityPerUnit: "48 - 6 oz jars",
    unitPrice: 22,
    unitsInStock: 53,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: true,
    name: "Chef Anton's Cajun Seasoning",
    supplier: {
      id: 2,
      companyName: "New Orleans Cajun Delights",
      contactName: "Shelley Burke",
      contactTitle: "Order Administrator",
      address: {
        street: "P.O. Box 78934",
        city: "New Orleans",
        region: "LA",
        postalCode: 70117,
        country: "USA",
        phone: "(100) 555-4822",
      },
    },
    category: {
      id: 3,
      description: "Desserts candies and sweet breads",
      name: "Confections",
    },
  },
  {
    id: 5,
    supplierId: 2,
    categoryId: 2,
    quantityPerUnit: "36 boxes",
    unitPrice: 21.35,
    unitsInStock: 0,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: true,
    name: "Chef Anton's Gumbo Mix",
  },
  {
    id: 6,
    supplierId: 3,
    categoryId: 2,
    quantityPerUnit: "12 - 8 oz jars",
    unitPrice: 25,
    unitsInStock: 120,
    unitsOnOrder: 0,
    reorderLevel: 25,
    discontinued: false,
    name: "Grandma's Boysenberry Spread",
  },
  {
    id: 7,
    supplierId: 3,
    categoryId: 7,
    quantityPerUnit: "12 - 1 lb pkgs.",
    unitPrice: 30,
    unitsInStock: 15,
    unitsOnOrder: 0,
    reorderLevel: 10,
    discontinued: false,
    name: "Uncle Bob's Organic Dried Pears",
  },
  {
    id: 8,
    supplierId: 3,
    categoryId: 2,
    quantityPerUnit: "12 - 12 oz jars",
    unitPrice: 40,
    unitsInStock: 6,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: false,
    name: "Northwoods Cranberry Sauce",
  },
  {
    id: 9,
    supplierId: 4,
    categoryId: 6,
    quantityPerUnit: "18 - 500 g pkgs.",
    unitPrice: 97,
    unitsInStock: 29,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: true,
    name: "Mishi Kobe Niku",
  },
  {
    id: 10,
    supplierId: 4,
    categoryId: 8,
    quantityPerUnit: "12 - 200 ml jars",
    unitPrice: 31,
    unitsInStock: 31,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: false,
    name: "Ikura",
  },
];






// Məhsulların Ortalam qiymətini tapın.

// price = 0;
// for (i = 0; i < originalProducts.length; i++) { 
//   price+= originalProducts[i].unitPrice
// }
// console.log(price/originalProducts.length)


// Stok miqdarı 10-dan az olan məhsulların sayı nə qədərdir.


// counter=0

// for(i=0;i<originalProducts.length;i++){
//     if(originalProducts[i].unitsInStock<10){
//         counter++
//     }
   
// } console.log(counter)


// Adında x hərfi olan neçə məhsul var.

// discontinued true olan neçə məhsul var.
// categoryId-si 4 olan məhsulları consola yazdır.
// Ən bahalı məhsulu tapın.
// Ən ucuz məhsulu tapın.



