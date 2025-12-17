import { error } from 'node:console'
import fs from 'node:fs'
import path from 'node:path'

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
    fs.writeFile(fileName, convertToJson(data), 'utf-8', (error) => error ? console.log(error): console.log('JSON file created successfully!'))
}

function convertToJson(data){
    return JSON.stringify(data, null, 2)
}

function readFromJson(fileName){
    fs.readFile(fileName, 'utf-8', (error, data) => error ? error: console.log("data: ", data))
}

function getPath(url ,param){
    return`${url}${param.toUpperCase()}.json`
}

async function getByParam(jsonUrl, param){
    const path = getPath(jsonUrl, param)
    const result = fetch(`https://spies-test-server-pink.vercel.app/${param}`)
    console.log(result)
    writeToJson(fileName, result)
}


