let data: (string | number)[] = ["Bob", 'bill', 20, 21]

for(let dataPoint in data){
    console.log(`${dataPoint} - ${data[dataPoint]}`)
}