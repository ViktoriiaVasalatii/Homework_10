function showAnimal(indexAnimal){
    const objectAnimal = [
        {
            name: "Dog",
            index: 1,
        },
        {
            name: "Ket",
            index: 2,
        },
        {
            name: "Pig",
            index: 3,
        },
        {
            name: "Chicken",
            index: 4,
        },
    ]
    try {
            let elementAnimal = objectAnimal[indexAnimal-1];
            if (elementAnimal.index == indexAnimal) {
                console.log(elementAnimal.name);
            }
        }
    catch (error) {
        const typeError = new TypeError("Error! Invalid index");
        console.log(typeError);
       }
}
console.log(showAnimal(7));