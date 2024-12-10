export class HashTable {
    constructor() {
        this.table = new Map();
    }
    
    set(key,value){
        this.table.set(key,value);
    }
    get(key){
        return this.table.get(key);
    }

    has(key){
        return this.table.has(key);
    }
    delete(key){
        this.table.delete(key)
    }
}