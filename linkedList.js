const Node = require("./node.js")

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;

        this.add = (value) => {
            const newNode = new Node(value)
            if(!this.head) {
                this.head = newNode
            } else {
                let current = this.head
                while(current.nextElement) {
                    current = current.nextElement
                }
                current.nextElement = newNode
            }
            this.size++
        }


        this.insertAtHead = (value) => {
            let newNode = new Node(value);
            newNode.nextElement = this.head;
            this.head = newNode;
        }

        this.getHead = () => {
            if (this.head !== null){
                return this.head.value;
            }
        }

        this.deleteAtHead = () => {
            if (this.head !== null)
            this.head = this.head.nextElement

        }

        this.insertAtEnd = (value) => {
            let newNode = new Node(value);
            let element = this.head;

            if(element === null){
                this.head = newNode;
                this.tail = newNode;
                return;
            }

            while(element !== null){
                element = element.nextElement;
            }

            element.nextElement = newNode;
            this.tail = newNode;
        }

        this.getLast = () => {
            return this.tail.value;;
        }

        this.returnLength = () => {
            console.log(this.size);
            return this.size
        }

        this.removeDuplicate = () => {
            let element = this.head; // meant to be the current
            while (element.nextElement !== null){
                let newElement = element.nextElement;
                if (element.value === newElement.value){
                    element.nextElement = newElement.nextElement;
                    while (element.value === element.nextElement.value) {
                        this.removeDuplicate();
                    }
                }
                element = element.nextElement;
            } 
  
        }

        this.checkForValue = (value) => {
            let element = this.head;
            while(element != null){
                if(element.value === value){
                    return true;
                } 
                element = element.nextElement;
            } 
            return false
        }
    }
}

LinkedList.prototype.isEmpty = function(){
    return this.head === null;
}

LinkedList.prototype.printElements = function(){  
    let element = this.head;

    while(element !== null){
        process.stdout.write(`${element.value} ->`);
        element = element.nextElement;
    }

    process.stdout.write(`null`);
}

module.exports = LinkedList;


function createRowElements(){
    return{
        shoppingCart
    }
}

