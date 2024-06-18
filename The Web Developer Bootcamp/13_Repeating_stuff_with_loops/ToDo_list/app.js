// initialise an empty object 'todo'
let todo = {};

// initialise an empty string 'command' to take command as a prompt from the user
let command = "";

// 'num' variable to track the todo number
let num = 0;

// loop until the 'command' !== 'quit'
while (command !== "quit") {
    // options to choose from
    command = prompt(
        "Choose from the following options:\n 1. new\n2. list\n3. delete\n4. quit"
    );

    // if the user cancels out, break
    if (command === null) {
        break;
    }

    // if 'command' is 'new', add a todo
    if (command === "new") {
        num++;
        todo[num] = prompt("Enter the todo: ");
        // check if the user entered the todo
        while (todo[num] === "") {
            alert("Please add a todo!");
            todo[num] = prompt("Enter the todo: ");
        }
        // if the user cancels out, continue
        if (todo[num] === null) {
            continue;
        } else {
            console.log("-----\n");
            console.log(`${todo[num]} added to the list`);
        }
    }

    // else if 'command' is 'list', show all the todo
    else if (command === "list") {
        // check if the object is empty
        if (Object.keys(todo).length === 0) {
            alert("ToDo is empty, please add some!");
        } else {
            console.log("-----\n");
            for (let todoNum in todo) {
                console.log(`${todoNum} - ${todo[todoNum]}`);
            }
        }
    }

    // else if 'command' is 'delete', delete todo with specific number assigned to it
    else if (command === "delete") {
        // check if the object is empty
        if (Object.keys(todo).length === 0) {
            alert("Nothing to delete!");
            continue;
        }
        // ask for the todo number
        let numToDelete = prompt("Enter the todo number: ");
        // check if the todo to delete exists in the object
        while (!(numToDelete in todo)) {
            // if the user cancels out, continue
            if (numToDelete === null) {
                break;
            }
            alert("Please enter correct todo number!");
            numToDelete = prompt("Enter the todo number: ");
        }
        // if the user cancels out, continue
        if (numToDelete === null) {
            continue;
        } else {
            console.log("-----\n");
            console.log(`${todo[numToDelete]} was removed`);
            delete todo[numToDelete];
        }
    }

    // else if 'command' is 'quit', break
    else if (command === "quit") {
        console.log("-----\n");
        console.log("Ok, you quit the app!");
    }

    // else if the user enters a wrong 'command'
    else {
        alert("Please enter a correct option!");
    }
}
