import { error } from 'node:console'
import fs from 'node:fs'

// const peopleData = {
//     personName,
//     age, 
//     proffesion,
//     numberOfChildren, 
//     hobbies,
//     favoriteFood
// }

// const transcriptions = {
//     id, 
//     callContant, 
//     age
// }  

function writeToJson(fileName, data){
    fs.writeFile(fileName, data, 'utf-8', (error) => error ? console.log(error): console.log('JSON file created successfully!'))
}

function convertToJson(data){
    return JSON.stringify(data, null, 2)
}

function readFromJson(fileName){
    fs.readFile(fileName, 'utf-8', (error, data) => error ? error: console.log("data: ", data))
}

