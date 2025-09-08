class LRUCache {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.map = new Map();
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    #removeNode(node) {
        if (!node) return;

        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;

        if (node === this.head) this.head = node.next;
        if (node === this.tail) this.tail = node.prev;

        node.prev = node.next = null;
    }

    #addToHead(node) {
        node.next = this.head;
        node.prev = null;

        if (this.head) this.head.prev = node;
        this.head = node;

        if (!this.tail) this.tail = node;
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this.#removeNode(node);
        this.#addToHead(node);

        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            node.value = value;
            this.#removeNode(node);
            this.#addToHead(node);
            return;
        }

        if (this.length === this.capacity) {
            // remove LRU node
            this.map.delete(this.tail.key);
            this.#removeNode(this.tail);
            this.length--;
        }

        const newNode = { key, value, prev: null, next: null };
        this.#addToHead(newNode);
        this.map.set(key, newNode);
        this.length++;
    }

    debug() {
        let current = this.head;
        let arr = [];
        while (current !== null) {
            arr.push(`[${current.key}: ${current.value}]`);
            current = current.next;
        }
        return arr.join(" -> ");
    }
}


// Example:
const cache = new LRUCache(3);
cache.put(1, 10);
cache.put(2, 20);
cache.put(3, 30);

console.log(cache.debug()); // [3: 30] -> [2: 20] -> [1: 10]

cache.get(1); // Access 1 -> moves to head
console.log(cache.debug()); // [1: 10] -> [3: 30] -
