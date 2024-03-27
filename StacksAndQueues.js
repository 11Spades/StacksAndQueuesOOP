const readline = require('readline');

class Queue {
    constructor() {
        this.data = [];
    }

    push(new_data) {
        this.data.push(new_data);
    }

    pop_front() {
        return this.data.shift();
    }

    pop_back() {
        return this.data.pop();
    }
}

class Stack {
    constructor() {
        this.data = []
    }

    push(new_data) {
        this.data.push(new_data);
    }

    pop() {
        return this.data.pop();
    }
}

// Set up I/O
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create and populate the queue
var queue = new Queue();
for (i = 0; i < 9; ++i) {
    queue.push(i);
}

// Create and populate the stack
var stack = new Stack();
for (i = 0; i < 10; ++i) {
    stack.push(i);
}

// Start the loop!
while (true) {
    console.log("The queue currently contains the following data:\n");
    console.log(queue.data);
    console.log();
    console.log("The stack currently contains the following data:\n");
    console.log(stack.data);
    console.log();
    rl.question("Please enter anything to continue.", answer => {
        rl.close();
    });
    queue.push(stack.pop());
    stack.push(queue.pop_front());
}
