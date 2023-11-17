// Numeric Enums

// PascalCase - Capital
// camelCase  - first letter lower case 

// enum RollNumbers {
//     John,
//     Kelly,
//     Sandra,
//     Joseph,
//     Samantha,
// }

// enum RollNumbers {
//     John = 1,
//     Kelly,
//     Sandra,
//     Joseph,
//     Samantha,
// }

// console.log(RollNumbers)

const enum RollNumbers {
    John,
    Kelly,
    Sandra,
    Joseph,
    Samantha,
}

let studentList: RollNumbers = RollNumbers.Sandra

console.log(studentList)


// String Enum Types
// const enum StudentDetails {
//     Name = "John",
//     Major = "Arts",
// }

// let studentName: StudentDetails = StudentDetails.Name
// let studentMajor: StudentDetails = StudentDetails.Major
// console.log(studentName, studentMajor)

// Heterogeneous Enums
const enum StudentDetails {
    ID = 1,
    Name = "John",
    Major = "Arts",
}

let studentID: StudentDetails = StudentDetails.ID
let studentName: StudentDetails = StudentDetails.Name
let studentMajor: StudentDetails = StudentDetails.Major
console.log(studentID, studentName, studentMajor)