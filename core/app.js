
import {writeToJson, readFromJson, getPath, printObject} from './utils.js'


export async function getByParam(jsonPath, param){
    const result = await fetch(`https://spies-test-server-pink.vercel.app/${param}`)
    console.log(result.statusText)
    const path = getPath(jsonPath, param)
    writeToJson(path, await result.json())
}

export async function searchByParam(fileName, prototype, value){
    let data = await readFromJson(fileName)
    let obj = data.filter((object) => object[prototype] === value)
    if (obj.length === 0){
        console.log(`${value} was not found`)
    } printObject(obj)
}
getByParam("./", "people")
export function getTopDangerous(){}

