/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an enum of product names and display it on the console
*/

enum ProductNames {
    product1 = "Laptop",
    product2 = "Mouse",
    product3 = "Keyboard",
}
console.log(ProductNames);
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create an enum of product ids and display it on the console
*/

console.log('------------------')

enum ProductIds {
    Laptop = 1,
    Mouse,
    Keyboard,
}
console.log(ProductIds);
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create an enum of a single favorite product detail from the two previously created enums and display it on the console
*/

enum FavoriteProduct {
    Name = ProductNames.product1,
    Id = ProductIds.Laptop,
}
console.log(
    `My favorite product is ${FavoriteProduct.Name} with an id of ${FavoriteProduct.Id}`
);