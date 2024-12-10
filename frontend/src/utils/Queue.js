class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(data){
        this.queue.push(data);
    }

    dequeue(){
        return this.queue.shift();
    }
}