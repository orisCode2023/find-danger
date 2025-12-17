import input from 'analiza-sync'
import { getByParam , searchByParam, getTopDangerous} from "./core/app.js";
function intelligenseMenu(){
    let choice;
    console.log("Welcome")
    while (choice !== 4){
        console.log("To create file by parameter press 1:\nTo search by parameter press 2: \nTo get the 3 most dangarous press 3: \nTo exit press 4: ")
        choice = input("Enter your choice: ")
        switch (choice) {
            case "1":
                getByParam(input("Enter the file path: "), input("Enter the parameter you want to search by: "))
                break;
            case "2":
                searchByParam(input("Enter the file path: "), input("Enter the prototype you want to search by: "), input("Enter the value you search: "))
                break;
            case "3":
                getTopDangerous()
                break;
            case "4":
                console.log("by by")
                return;

        }
    }
}
intelligenseMenu()
