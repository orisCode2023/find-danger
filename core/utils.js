import fs from 'fs/promises'
export function writeToJson(fileName, data){
    fs.writeFile(fileName, convertToJson(data), 'utf-8', (error) => error ? console.log(error): console.log('JSON file created successfully!'))
}

export function convertToJson(data){
    return JSON.stringify(data, null, 2)
}

export async function readFromJson(fileName){
    return JSON.parse(await fs.readFile(fileName, 'utf-8'))
}

export function getPath(url ,param){
    return`${url}${param.toUpperCase()}.json`
}
export function printObject(array){
    array.forEach((value) => console.log(value))
}
