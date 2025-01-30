import { LinkedList } from "./linked-lists.js";

const list = new LinkedList();
list.append("value2");
list.append("value3");
list.append("value4");
list.prepend("value1");
list.append("value5");
list.append("value6");
list.append("value7");
list.pop()

console.log("size: " + list.size());

console.log("head: " + JSON.stringify(list.head()));

console.log("tail: " + JSON.stringify(list.tail()));
console.log(list.list);
console.log(list.list.next.next.next);

console.log("index at 5" + JSON.stringify(list.at(5)));

console.log("index at " + JSON.stringify(list.at(0)));