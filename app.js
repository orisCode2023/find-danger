// import input from 'analiza-sync'
import fs from 'fs/promises'

function writeToJson(fileName, data){
    fs.writeFile(fileName, convertToJson(data), 'utf-8', (error) => error ? console.log(error): console.log('JSON file created successfully!'))
}

function convertToJson(data){
    return JSON.stringify(data, null, 2)
}

async function readFromJson(fileName){
    return JSON.parse(await fs.readFile(fileName, 'utf-8'))
}

function getPath(url ,param){
    return`${url}${param.toUpperCase()}.json`
}

async function getByParam(jsonPath, param){
    const result = await fetch(`https://spies-test-server-pink.vercel.app/${param}`)
    console.log(result)
    const path = getPath(jsonPath, param)
    writeToJson(path, await result.json())
}
function printObject(array){
    array.forEach((value) => {
        console.log(value)
    })
}
async function searchByParam(fileName, prototype, value){
    let data = await readFromJson(fileName)
    let obj = data.filter((object) => object[prototype] === value)
    if (obj.length === 0){
        console.log(`${value} was not found`)
    } printObject(obj)
}
searchByParam("./PEOPLE.json", "name", "Shira")

