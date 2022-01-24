# Data-Structures-And-Algorithms

Marvel Johnson  
[LinkedIn](https://www.linkedin.com/in/marvel-johnson/) | [GitHub](https://github.com/Menthus123)

</br>

![Tests](https://github.com/menthus123/Data-Structures-And-Algorithms/actions/workflows/node.js.yml/badge.svg)

## Description:

A space for me to learn and fiddle around with different data structures and algorithms.

I'm using [Jest](https://jestjs.io/) for the unit tests, which can be ran using the `npm test` command.

</br>

## Data Structures:

### <a href="#binary-tree-1">Binary Tree</a>

### <a href="#singly-linked-list-1">Singly Linked List</a>

### <a href="#doubly-linked-list-1">Doubly Linked List</a>

### <a href="#dynamic-array-1">Dynamic Array</a>

### <a href="#hash-table-1">Hash Table</a>

</br>

## Algorithms:

### <a href="#binary-search-1">Binary Search</a>

### <a href="#bubble-sort-1">Bubble Sort</a>

### <a href="#insertion-sort-1">Insertion Sort</a>

### <a href="#bucket-sort-1">Bucket Sort</a>

### <a href="#radix-sort-1">Radix Sort</a>

### <a href="#merge-sort-1">Merge Sort</a>

### <a href="#quick-sort-1">Quick Sort</a>

</br>
</br>

## [Binary Tree](#binary-tree-1)

A tree-like structure where the root is on top (R), branches are the 'edges' or 'nodes' that have children (B), and leaves are the 'nodes' that have no children (L).

</br>

The examples below were created with the `stringify` function built into the BinaryTree class (with the exception of the first example).

<details>
  <summary>Visual Example 1</summary>

    ___R___
    _B___B_
    L_L_L_L

</details>

<details>
  <summary>Visual Example 2</summary>

    _______5_______
    ___0_______7___
    _X___2___X___X_
    X_X_X_4_X_X_X_X

</details>

<details>
  <summary>Visual Example 3</summary>

    _______________________________5_______________________________
    _______________1_______________________________5_______________
    _______X_______________4_______________X_______________6_______
    ___X_______X_______X_______X_______X_______X_______X_______7___
    _X___X___X___X___X___X___X___X___X___X___X___X___X___X___X___9_
    X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_8_X

</details>

</br>

I've implemented a number of functions that allow a binary tree to be manipulated:

The constructor takes one argument that defines what value the root node will have. This is important, because the placement of insertions depends upon whether the input value is greater than or less than the value of the root node.

```javascript
const tree = new BinaryTree(value);
```

Convenience getters for accessing properties on the root node.

```javascript
tree.value;
tree.left;
tree.right;
```

Performs a recursive dive into the tree, choosing a direction based on the delta between the input value and the current node's value.

```javascript
tree.insert(value);
```

Performs a recursive search for the input value, and removes it if it's found.

```javascript
tree.delete(value);
```

Recursively swaps the left and right properties of each node in the tree, starting from the root.

```javascript
tree.reverse();
```

Returns a formatted string representation of the binary tree.

```javascript
tree.stringify();
```

</br>

<details>
  <summary>Resources</summary>

- Wikipedia <a href="https://en.wikipedia.org/wiki/Binary_tree">https://en.wikipedia.org/wiki/Binary_tree
</details>

</br>

## [Singly Linked List](#singly-linked-list-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list">https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list
</details>

</br>

## [Doubly Linked List](#doubly-linked-list-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Linked_list#Doubly_linked_list">https://en.wikipedia.org/wiki/Linked_list#Doubly_linked_list
</details>

</br>

## [Dynamic Array](#dynamic-array-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Dynamic_array">https://en.wikipedia.org/wiki/Dynamic_array
</details>

</br>

## [Hash Table](#hash-table-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Hash_table">https://en.wikipedia.org/wiki/Hash_table
</details>

</br>
</br>
</br>

## [Binary Search](#binary-search-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Binary_search_algorithm">https://en.wikipedia.org/wiki/Binary_search_algorithm
</details>

</br>

## [Bubble Sort](#bubble-sort-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Bubble_sort">https://en.wikipedia.org/wiki/Bubble_sort
</details>

</br>

## [Insertion Sort](#insertion-sort-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Insertion_sort">https://en.wikipedia.org/wiki/Insertion_sort
</details>

</br>

## [Bucket Sort](#bucket-sort-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

Wikipedia: <a href="https://en.wikipedia.org/wiki/Bucket_sort">https://en.wikipedia.org/wiki/Bucket_sort

</details>

</br>

## [Radix Sort](#radix-sort-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Radix_sort">https://en.wikipedia.org/wiki/Radix_sort
</details>

</br>

## [Merge Sort](#merge-sort-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Merge_sort">https://en.wikipedia.org/wiki/Merge_sort
</details>

</br>

## [Quick Sort](#quick-sort-1)

</br>

-Coming Soon-

</br>

<details>
  <summary>Resources</summary>

- Wikipedia: <a href="https://en.wikipedia.org/wiki/Quicksort">https://en.wikipedia.org/wiki/Quicksort
</details>
