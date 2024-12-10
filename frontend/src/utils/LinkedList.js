export class Node{
    constructor(data){
        this.data = data;
        this.next = null; 
    }
}
export class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addMessage(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            const current = this.head;
            while(current.next !==null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    traverse(){
        const elements = [];
        const current = this.head;

        while(current){
            elements.push(current.data);
            current = current.next;
        }
        return elements;
    }

}