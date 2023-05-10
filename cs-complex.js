// ==================================
// Advanced Concepts
// ==================================

// Memoization with Time-to-Live (TTL)
const memoizeWithTtl = (fn, ttl) => {
    const cache = {};
    return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key] && Date.now() - cache[key].time < ttl) {
    return cache[key].value;
    }
    const result = fn(...args);
    cache[key] = { value: result, time: Date.now() };
    return result;
    };
    };
    
    const memoFibWithTtl = memoizeWithTtl(fibonacci, 5000);
    console.log(memoFibWithTtl(5)); // Output: 5
    console.log(memoFibWithTtl(5)); // Output: 5 (from cache)
    setTimeout(() => console.log(memoFibWithTtl(5)), 6000); // Output: 5 (not from cache)
    
    // Immutable Data Structures with Immer.js
    const { produce } = require("immer");
    
    const state = {
    user: {
    name: "John",
    age: 30,
    address: {
    city: "New York",
    state: "NY",
    },
    },
    };
    
    const newState = produce(state, (draft) => {
    draft.user.age = 31;
    draft.user.address.city = "Chicago";
    });
    
    console.log(newState);
    /*
    Output: {
    user: {
    name: "John",
    age: 31,
    address: {
    city: "Chicago",
    state: "NY",
    },
    },
    }
    */
    
    // SOLID Principles - Single Responsibility Principle (SRP)
    class UserService {
    async getUserById(id) {
    // fetch user by id
    return user;
    }
    
    async updateUserById(id, data) {
    // update user by id
    return updatedUser;
    }
    
    async deleteUserById(id) {
    // delete user by id
    return deletedUser;
    }
    }
    
    // SOLID Principles - Open-Closed Principle (OCP)
    class Discount {
    calculate(price) {
    return price;
    }
    }
    
    class TenPercentDiscount extends Discount {
    calculate(price) {
    return price * 0.9;
    }
    }
    
    class TwentyPercentDiscount extends Discount {
    calculate(price) {
    return price * 0.8;
    }
    }
    
    // SOLID Principles - Liskov Substitution Principle (LSP)
    class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    
    setWidth(width) {
    this.width = width;
    }
    
    setHeight(height) {
    this.height = height;
    }
    
    area() {
    return this.width * this.height;
    }
    }
    
    class Square extends Rectangle {
    constructor(size) {
    super(size, size);
    }
    
    setWidth(width) {
    this.width = width;
    this.height = width;
    }
    
    setHeight(height) {
    this.width = height;
    this.height = height;
    }
    }
    
    // ==================================
    // Data Structures
    // ==================================
    
    // Trie Data Structure
    class TrieNode {
    constructor() {
    this.children = {};
    this.isEndOfWord = false;
    }
    }
    
    class Trie {
    constructor() {
    this.root = new TrieNode();
    }
    
    insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    let node = current.children[ch];
      if (!node) {
        node = new TrieNode();
        current.children[ch] = node;
      }
      current = node;
    }
    current.isEndOfWord = true;
    }
    
    search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const node = current.children[ch];
    if (!node) {
    return false;
    }
    current = node;
    }
    return current.isEndOfWord;
    }
    
    startsWith(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i];
    const node = current.children[ch];
    if (!node) {
    return false;
    }
    current = node;
    }
    return true;
    }
    }
    
    const trie = new Trie();
    trie.insert("apple");
    console.log(trie.search("apple")); // Output: true
    console.log(trie.search("app")); // Output: false
    console.log(trie.startsWith("app")); // Output: true
    trie.insert("app");
    console.log(trie.search("app")); // Output: true
    
    // Priority Queue Data Structure
    class PriorityQueue {
    constructor() {
    this.heap = [null];
    }
    
    size() {
    return this.heap.length - 1;
    }
    
    isEmpty() {
    return this.size() === 0;
    }
    
    peek() {
    if (this.isEmpty()) {
    throw new Error("Priority queue is empty.");
    }
    return this.heap[1];
    }
    
    enqueue(value, priority = 0) {
    this.heap.push({ value, priority });
    let currentIndex = this.size();
    while (currentIndex > 1) {
    const parentIndex = Math.floor(currentIndex / 2);
    if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
    [this.heap[currentIndex], this.heap[parentIndex]] = [
    this.heap[parentIndex],
    this.heap[currentIndex],
    ];
    currentIndex = parentIndex;
    } else {
    break;
    }
    }
    }
    
    dequeue() {
    if (this.isEmpty()) {
    throw new Error("Priority queue is empty.");
    }
    const result = this.heap[1].value;
    if (this.size() === 1) {
    this.heap.pop();
    return result;
    }
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    while (true) {
    const leftChildIndex = currentIndex * 2;
    const rightChildIndex = currentIndex * 2 + 1;
    let nextIndex = currentIndex;
    if (
    leftChildIndex <= this.size() &&
    this.heap[leftChildIndex].priority < this.heap[nextIndex].priority
    ) {
    nextIndex = leftChildIndex;
    }
    if (
    rightChildIndex <= this.size() &&
    this.heap[rightChildIndex].priority < this.heap[nextIndex].priority
    ) {
    nextIndex = rightChildIndex;
    }
    if (nextIndex !== currentIndex) {
    [this.heap[currentIndex], this.heap[nextIndex]] = [
    this.heap[nextIndex],
    this.heap[currentIndex],
    ];
    currentIndex = nextIndex;
    } else {
    break;
    }
    }
    return result;
    }
    }
    
    const pq = new PriorityQueue();
    pq.enqueue("C", 3);
    pq.enqueue("A", 1);
    pq.enqueue("B", 2);
    console.log(pq.dequeue()); // Output: "A"
    console.log(pq.dequeue()); // Output: "B"
    console.log(pq.dequeue()); // Output: "C"
    
    // ==================================
    // SOLID Principles
    // ==================================
    
    // Dependency Inversion Principle (DIP)
    class UserRepository {
    async findById(id) {
    // fetch user by id
    return user;
    }
    
    async create(data) {
    // create user
    return createdUser;
    }
    
    async updateById(id, data) {
    // update user by id
    return updatedUser;
    }
    
    async deleteById(id) {
    // delete user by id
    return deletedUser;
    }
    }
    
    class UserService {
    constructor(userRepository) {
    this.userRepository = userRepository;
    }
    
    async getUserById(id) {
    return this.userRepository.findById(id);
    }
    
    async createUser(data) {
    return this.userRepository.create(data);
    }
    
    async updateUserById(id, data) {
    return this.userRepository.updateById(id, data);
    }
    
    async deleteUserById(id) {
    return this.userRepository.deleteById(id);
    }
    }
    
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    const user = await userService.getUserById(1);
    
    // Interface Segregation Principle (ISP)
    class Vehicle {
    startEngine() {}
    
    stopEngine() {}
    
    drive() {}
    
    stop() {}
    }
    
    class Car extends Vehicle {
    openDoor() {}
    
    closeDoor() {}
    }
    
    class Motorcycle extends Vehicle {
    ride() {}
    
    stopRiding() {}
    }
    
    // ==================================
    // Data Structures
    // ==================================
    
    // Trie Data Structure with Autocomplete
    class TrieNode {
    constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.words = [];
    }
    }
    
    class Trie {
    constructor() {
    this.root = new TrieNode();
    }
    
    insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    let node = current.children[ch];
    if (!node) {
    node = new TrieNode();
    current.children[ch] = node;
    }
    current = node;
    current.words.push(word);
    }
    current.isEndOfWord = true;
    }
    
    search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const node = current.children[ch];
    if (!node) {
    return [];
    }
    current = node;
    }
    return current.words;
    }
    }
    
    const trie = new Trie();
    trie.insert("apple");
    trie.insert("application");
    trie.insert("applesauce");
    console.log(trie.search("app")); // Output: ["application", "apple", "applesauce"]
    
    // Graph Data Structure with DFS and BFS Traversal
    class Graph {
    constructor() {
    this.adjacencyList = {};
    }
    
    addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
    this.adjacencyList[vertex] = [];
    }
    }
    
    addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    }
    
    removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    (v) => v !== vertex1
    );
    }
    
    removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
}
    depthFirstSearchRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
    if (!vertex) return null;
    visited[vertex] = true;
    result.push(vertex);
    adjacencyList[vertex].forEach((neighbor) => {
    if (!visited[neighbor]) {
    return dfs(neighbor);
    }
    });
    }
    dfs(start);
    return result;
    }
    
    depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
    currentVertex = stack.pop();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
    if (!visited[neighbor]) {
    visited[neighbor] = true;
    stack.push(neighbor);
    }
    });
    }
    return result;
    }
    
    breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
    if (!visited[neighbor]) {
    visited[neighbor] = true;
    queue.push(neighbor);
    }
    });
    }
    return result;
    }
    }
    
    const g = new Graph();
    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addVertex("D");
    g.addEdge("A", "B");
    g.addEdge("A", "C");
    g.addEdge("B", "D");
    g.addEdge("C", "D");
    console.log(g.depthFirstSearchRecursive("A")); // Output: ["A", "B", "D", "C"]
    console.log(g.depthFirstSearchIterative("A")); // Output: ["A", "C", "D", "B"]
    console.log(g.breadthFirstSearch("A")); // Output: ["A", "B", "C", "D"]
    
    // ==================================
    // Conclusion
    // ==================================
    
   // These two pages of complex code cover advanced concepts, data structures, and SOLID OOP principles not covered in the previous JavaScript cheat sheet. The advanced concepts include memoization with TTL, immutable data structures with Immer.js, and SOLID principles such as Dependency Inversion Principle (DIP), Interface Segregation Principle (ISP), and Open-Closed Principle (OCP). The data structures include Trie data structure with autocomplete and Priority Queue data structure. The SOLID OOP techniques include Single Responsibility Principle (SRP) and Liskov Substitution Principle (LSP). Finally, the code includes a Graph data structure with Depth-First Search (DFS) and Breadth-First Search (BFS) traversal methods. This cheat sheet can be used as a reference for developers looking to improve their JavaScript skills and write more efficient and maintainable code.