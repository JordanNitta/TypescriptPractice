"use strict";
/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Based on the below array of search history of a user, return “Would you like to learn how to create websites for free?” if there is a keyword html or css
*/
let searchHistory = [
    "how to make money online",
    "benefits of eating garlic",
    "html css tutorial",
    "calisthenics",
];
for (let searchItem of searchHistory) {
    // console.log(searchItem.split(" "));
    for (let entry of searchItem.split(" ")) {
        // console.log(entry);
        if (entry === "html" || entry === "css")
            console.log("Would you like to learn how to create websites for free?");
    }
}
// Short version
// searchHistory.map((entry) => {
//   if (entry.includes("html") || entry.includes("css"))
//     console.log("Would you like to learn how to create websites for free?");
// });
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
