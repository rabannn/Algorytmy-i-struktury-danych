class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // Metoda wstawiająca nowy węzeł do drzewa
    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    // Metoda sprawdzająca, czy drzewo zawiera określoną wartość
    contains(data) {
        if (this.data === data) {
            return this;
        }

        if (this.data < data && this.right) {
            return this.right.contains(data);
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        }

        return null;
    }
}

module.exports = Node;