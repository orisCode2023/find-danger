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
    fs.writeFile(fileName, data, (error) => error ? console.log(error): console.log("write to json succesfully"))
}

