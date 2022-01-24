const BinaryTree = require('./binary-tree');

test('Assigns the correct value to the root node', () => {
  const tree = new BinaryTree(5);
  expect(tree.root.value).toBe(5);
});

describe('Implements getters for root node', () => {
  test('Has value getter', () => {
    const tree = new BinaryTree(5);

    expect(tree.value).toBeDefined();
  });

  test('Has left getter', () => {
    const tree = new BinaryTree(5);

    expect(tree.left).toBeDefined();
  });

  test('Has right getter', () => {
    const tree = new BinaryTree(5);

    expect(tree.right).toBeDefined();
  });
});

describe('Implements insert functionality', () => {
  test('Has insert function', () => {
    const tree = new BinaryTree(5);

    expect(tree.insert).toBeDefined();
  });

  test('Inserts a new item properly', () => {
    const tree = new BinaryTree(5);

    tree.insert(3);
    tree.insert(2);
    tree.insert(7);
    tree.insert(6);

    expect(tree.left?.value).toBe(3);
    expect(tree.left?.left?.value).toBe(2);
    expect(tree.right?.value).toBe(7);
    expect(tree.right?.left?.value).toBe(6);
  });
});

describe('Keeps track of tree height', () => {
  test('Has height property', () => {
    const tree = new BinaryTree(5);

    expect(tree.height).toBeDefined();
  });

  test('Keeps track of height properly', () => {
    const tree = new BinaryTree(5);

    tree.insert(3);
    tree.insert(7);
    tree.insert(2);

    expect(tree.height).toBe(2);
  });
});

describe('Implements delete functionality', () => {
  test('Has delete function', () => {
    const tree = new BinaryTree(5);
    expect(tree.delete).toBeDefined();
  });

  test('Deletes an item properly', () => {
    const tree = new BinaryTree(5);

    tree.insert(1);
    tree.insert(7);
    const firstDeleteResult = tree.delete(1);
    const secondDeleteResult = tree.delete(7);

    expect(firstDeleteResult).toBe(1);
    expect(secondDeleteResult).toBe(1);
    expect(tree.left).toBeNull();
    expect(tree.right).toBeNull();
  });
});

describe('Implement reverse functionality', () => {
  test('Has reverse function', () => {
    const tree = new BinaryTree(5);

    expect(tree.reverse).toBeDefined();
  });

  test('Reverses binary tree properly', () => {
    const tree = new BinaryTree(5);

    tree.insert(3);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.reverse();

    expect(tree.left?.value).toBe(7);
    expect(tree.left?.right?.value).toBe(6);
    expect(tree.right?.value).toBe(3);
    expect(tree.right?.left.value).toBe(4);
  });
});

describe('Implement stringification functionality', () => {
  test('Has stringify function', () => {
    const tree = new BinaryTree(5);

    expect(tree.stringify).toBeDefined();
  });

  test('Stringifies binary tree', () => {
    const tree = new BinaryTree(5);

    tree.insert(3);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(5);
    let visual = tree.stringify('#', 'X');

    expect(visual).toBe(
      '#######5#######\n' +
        '###3#######7###\n' +
        '#X###4###6###X#\n' +
        'X#X#X#X#5#X#X#X'
    );

    tree.reverse();
    visual = tree.stringify('#', 'X');

    expect(visual).toBe(
      '#######5#######\n' +
        '###7#######3###\n' +
        '#X###6###4###X#\n' +
        'X#X#X#5#X#X#X#X'
    );
  });
});
