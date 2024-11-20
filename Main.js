

function insertAtPosition(array, element, position) {
    if (position < 0 || position > array.length) {
        console.error("Invalid position!");
        return;
    }
    
     for (let i = array.length; i > position; i--) {
        array[i] = array[i - 1];
    }
    
     
    array[position] = element;
    
    return array;
}

 
let myArray = [1, 2, 3, 4, 5];
let elementToInsert = 10;
let positionToInsert = 2;

console.log("Original array:", myArray);
console.log("Inserting", elementToInsert, "at position", positionToInsert);
insertAtPosition(myArray, elementToInsert, positionToInsert);
console.log("Modified array:", myArray);


