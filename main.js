import { LinkedList } from "./linked-lists.js";

const list = new LinkedList();
list.append("value2");
list.append("value3");
list.append("value4");
list.prepend("value1");
list.append("value5");
list.append("value6");
list.append("value7");
list.pop();

console.log("size: " + list.size());

console.log("head: " + JSON.stringify(list.head()));

console.log("tail: " + JSON.stringify(list.tail()));
console.log(list.list);
console.log(list.list.next.next.next);

console.log("index at 5" + JSON.stringify(list.at(5)));

console.log("index at " + JSON.stringify(list.at(0)));

console.log("is there value7 in list: " + list.contains("value7"));
console.log("is there value6 in list: " + list.contains("value6"));
console.log("is value6 match with index 5?, index: " + list.find("value6"));

console.log("is value7 match with null, index: " + list.find("value7"));

// is 4.5 between 4 and 5?"
list.insertAt("value4.5", 3);

//this should be remove the value2
list.removeAt(1);

console.log(list.toString());
