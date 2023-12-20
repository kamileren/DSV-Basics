class ArrayList
{
    constructor()
    {
        this.data = new Array();   
        this.numOfNumberElements = 0;
    }   



    get(index)
    {
        if (index < 0 || index > this.numOfNumberElements-1) {
            console.log("Invalid index");
            return;
        }

        return this.data[index];
    }

    set(element,index)
    {

        if (index < 0 || index > this.numOfNumberElements-1) {
            console.log("Invalid index");
            return;
        }
        
        let temp = this.data[index];
        this.data[index] = element;
        return temp;
    }

    add(element) {
        if (this.numOfNumberElements >= this.data.length) {
            this.resize();
        }
        this.data[this.numOfNumberElements] = element;
        this.numOfNumberElements++;
    }


    remove() {
        if (this.numOfNumberElements === 0) {
            console.log("Array is empty");
            return;
        }
        console.log('Removing last element');
        let temp = this.data[this.numOfNumberElements - 1];
        this.data[this.numOfNumberElements - 1] = undefined;
        --this.numOfNumberElements;
    
        if(this.data.length>=3*this.numOfNumberElements) this.shrink();

    
        return temp;
    }
    


    addAt(index, element) {
        if (index < 0 || index > this.numOfNumberElements) {
            console.log("Invalid index");
            return;
        }

        // Resize if the array is full or if adding right at the end
        if (this.numOfNumberElements === this.data.length || index === this.numOfNumberElements) {
            this.resize();
        }

        // Shift elements to the right
        for (let i = this.data.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }

        // Insert the new element
        this.data[index] = element;
        this.numOfNumberElements++; // Increment the counter
    }


    removeAt(index) {
        if (index < 0 || index >= this.numOfNumberElements) {
            console.log("Invalid index");
            return;
        }
        let removedElement = this.data[index];
        for (let i = index; i < this.numOfNumberElements - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.data[this.numOfNumberElements - 1] = undefined; // Set the last element to undefined
        this.numOfNumberElements--; // Decrement the count of elements
        if(this.data.length>=3*this.numOfNumberElements) this.shrink();
        return removedElement;
    }



    resize() {
        let newArr = new Array(this.data.length * 2);
        for (let i = 0; i < this.data.length; i++) {
            newArr[i] = this.data[i];
        }
        this.data = newArr;
    }


    shrink()
    { 
        console.log("shrink");
        let newArr = new Array(Math.floor(numOfNumberElements*(1/3)))
        for(let i = 0; i< this.numOfNumberElements;i++)
        {
            newArr[i] = this.data[i];
        }

        this.data = newArr;
    }


    clear()
    {
        this.data = new Array();
    }

}



function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}   

function testAddition(arrayList, numOfElements) {
    for (let i = 0; i < numOfElements; i++) {
        arrayList.add(i);
        if (arrayList.get(i) !== i) {
            return false; // Test failed
        }
    }
    return arrayList.numOfNumberElements === numOfElements; // Check if all elements were added
}


function testRemoval(arrayList) {
    let originalSize = arrayList.numOfNumberElements;
    let removedElement = arrayList.remove();
    return arrayList.numOfNumberElements === originalSize - 1 && !arrayList.data.includes(removedElement);
}
let numberList = new ArrayList();
let numOfNumberElements = 10;

console.log("Testing Addition:", testAddition(numberList, numOfNumberElements));
console.log("Testing Removal:", testRemoval(numberList));
