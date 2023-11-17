let mixData: (string | number)[] = ["Cosmos", "Bill", 13, 50, "Star"]

// for (let item of mixData) {
//     console.log(item)
// }

// for (let item of mixData.entries()) {
//     console.log(item[0], item[1])
// }

// Destructure 
for (let [i, item] of mixData.entries()) {
    console.log(`${i + 1}- ${item}`)
}

