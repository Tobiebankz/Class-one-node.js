Operations in node js
        Asynchronous operations: this kind of operation does not allow other requests to block another request, i.e It is a non blocking code operation
        Synchronous operations: It blocks other operations from running until that particular operation that is currently running has been completed


Global variables: these are variables that can be accessed easily anywhere in your project without importing them.
Example: __dirname, __filename, console, module, process, require, setInterval

console.log(__dirname)
console.log(__filename)
console.log(console)


Modules
a) Core/Built-in modules
FS - File System
Asynchronous functions: this are functions or methods that does not allow blocking of codes. It contains a callback function.

Synchronous functions: these are functions or methods that allows blocking of codes. It does not contains a callback function

const fs = require("fs")

// Examples of Asynchronous methods
// const content = "I am an instructor in CodarTech institute, and I am teaching Web Development."
// fs.writeFile("fileA.txt", content, (err)=>{
//     if(err){
//         console.log("Error Occured: "+ err)
//         return;
//     }
//     console.log("File Written Successfully")
// })


// fs.writeFileSync("fileB.txt", "I am just trying my chances")
// console.log("File Written Successfully")

// console.log("I am currently here");



// Read File method
// Asynchronous method
// fs.readFile("fileA.txt", "utf8", (err, data)=>{
//     if(err){
//         console.log("Error Occured: "+ err)
//         return;
//     }

//     console.log("File Content: "+ data)
// })





// console.log("Testing method")


// The synchronous method
// const data = fs.readFileSync("fileB.txt", "utf8")
// console.log("File Content: "+ data)
// console.log("I am currently here");


// Append File method
// fs.appendFile("fileA.txt", "\nI am current running a new node js batch.", (err)=>{
//     if(err){
//         console.log("Error Occured: "+ err)
//         return;
//     }
//     console.log("File Appended Successfully")
// })

// fs.appendFileSync("fileB.txt", "\nI am saying no to failure.")
// console.log("File Appended Successfully")



// Delete file method
// fs.unlink("fileA.txt", (err)=>{
//     if(err){
//         console.log("Error Occured: "+ err)
//         return;
//     }
//     console.log("File Deleted Successfully")
// })

// fs.unlinkSync("fileB.txt")

// b) Local modules
// c) 3rd Party modules

