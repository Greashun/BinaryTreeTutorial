class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right =null;
    } 
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        const currNode = this.root;

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        while (currNode.value) {
            if (val === currNode.value) {
                return "It already exists";
            }
            
            if (val < currNode.value) {
                if (!currNode.left) {
                    currNode.left = newNode;
                    return this;
                }
                currNode = currNode.left;

            } else {

                if (!currNode.right) {
                    currNode.right = newNode;
                    return this;
                } 
                currNode = currNode.right;
            }
        }
    }

    find(val) {
        const currNode = this.root;
        let found = false;

        if (!currNode) {
            return "root is empty!";
        }

        while (currNode && !found) {
            if (val == currNode) {
                found = true;
            } else if (val < currNode.value) {
                currNode = currNode.left;
            } else if (val > currNode.value) {
                currNode = currNode.right;
            }
        }

        if (found) {
            return currNode;
        } else {
            return "Does not exist";
        }
    } 

    preOrder(node = this.root, data = []) {

        if (node) {
            data.push(node.value);
            if (node.left) {
                this.preOrder(node.left, data);
            }

            if (node.right) {
                this.preOrder(node.right, data);
            }
        }
        return data;
    }

    inOrder(node = this.root, data = []) {
        if (node) {
            if (node.left) {
                this.inOrder(node.left, data);
            }

            data.push(node.value);

            if (node.right) {
                this.inOrder(node.right, data);
            }
        }
        return data;
    }

    postOrder(node = this.root, data = []) {
        if (node) {
            if (node.left) {
                this.inOrder(node.left, data);
            }

            if (node.right) {
                this.inOrder(node.right, data);
            }

            data.push(node.value);
        }
        return data;
    }
}


const tree = new BST();