const BinaryTree = require('./datastructures/trees/binary-tree');

const tree = new BinaryTree(5);
const randomSet = new Set();

for (let i = 0; i < Math.round(Math.random() * 10 + 1); i++) {
  randomSet.add(Math.floor(Math.random() * 10));
}

[...randomSet.values()].forEach((value) => tree.insert(value));

console.log(tree.stringify('_', 'X'));

tree.reverse();
console.log();

console.log(tree.stringify('_', 'X'));
