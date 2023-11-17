"use strict";
/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an enum of product names and display it on the console
*/
var ProductNames;
(function (ProductNames) {
    ProductNames["product1"] = "Laptop";
    ProductNames["product2"] = "Mouse";
    ProductNames["product3"] = "Keyboard";
})(ProductNames || (ProductNames = {}));
console.log(ProductNames);
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create an enum of product ids and display it on the console
*/
console.log('------------------');
var ProductIds;
(function (ProductIds) {
    ProductIds[ProductIds["Laptop"] = 1] = "Laptop";
    ProductIds[ProductIds["Mouse"] = 2] = "Mouse";
    ProductIds[ProductIds["Keyboard"] = 3] = "Keyboard";
})(ProductIds || (ProductIds = {}));
console.log(ProductIds);
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create an enum of a single favorite product detail from the two previously created enums and display it on the console
*/
var FavoriteProduct;
(function (FavoriteProduct) {
    FavoriteProduct["Name"] = "Laptop";
    FavoriteProduct[FavoriteProduct["Id"] = 1] = "Id";
})(FavoriteProduct || (FavoriteProduct = {}));
console.log(`My favorite product is ${FavoriteProduct.Name} with an id of ${FavoriteProduct.Id}`);
