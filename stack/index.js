class Stack {
    constructor() {
        this.data = [];
    }

    // Dodawanie elementu na stos
    push(element) {
        this.data.push(element);
    }

    // Usuwanie elementu ze stosu i zwracanie go
    pop() {
        return this.data.pop();
    }

    // Zwracanie elementu na szczycie stosu (bez usuwania go)
    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;