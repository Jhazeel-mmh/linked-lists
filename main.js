import { LinkedList } from "./linked-lists.js";

const list = new LinkedList();
list.append("value2");
list.append("value3");
list.append("value4");
list.prepend("value1");
list.prepend("value0");
list.append("value5");
list.append("value6");
list.append("value7");


console.log("size: " + list.size());

console.log("head: " + JSON.stringify(list.head()));

console.log("tail: " + JSON.stringify(list.tail()));
console.log(list.list);
console.log(list.list.next.next.next);
