class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  get value() {
    return this.root.value;
  }

  get left() {
    return this.root.left;
  }

  get right() {
    return this.root.right;
  }

  get height() {
    let maxHeight = 0;

    const digger = (node, height) => {
      maxHeight = Math.max(maxHeight, height);

      if (node.left) digger(node.left, height + 1);
      if (node.right) digger(node.right, height + 1);
    };

    digger(this.root, 0);
    return maxHeight;
  }

  insert(value) {
    const helper = (node) => {
      if (value < node.value) {
        insertOrRecurse(node, 'left');
      } else {
        insertOrRecurse(node, 'right');
      }
    };

    const insertOrRecurse = (node, direction) => {
      if (node[direction] === null) {
        node[direction] = new Node(value);
      } else {
        helper(node[direction]);
      }
    };

    helper(this.root);
  }

  delete(value) {
    const helper = (node) => {
      if (value < node.value) {
        return deleteOrRecurse(node, 'left');
      } else {
        return deleteOrRecurse(node, 'right');
      }
    };

    const deleteOrRecurse = (node, direction) => {
      if (node[direction] === null) return -1;
      else if (value === node[direction].value) {
        node[direction] = null;
        return 1;
      }

      return helper(node[direction]);
    };

    return helper(this.root);
  }

  reverse() {
    const helper = (node) => {
      if (!node) return;

      const leftCopy = node.left;
      node.left = node.right;
      node.right = leftCopy;

      helper(node.left);
      helper(node.right);
    };

    helper(this.root);
  }

  stringify(padderVisual, leafVisual) {
    const height = this.height;
    const treeLayers = [...Array(height + 1)].map((e, index) => []);
    let stringifiedTree = '';

    // Turns treeLayers into something like [[5], [3,7], [null, 4, 6, null]],
    // filling in leaves with null as long as we haven't reached the bottom of the tree
    const flattenTree = (node, currentHeight) => {
      treeLayers[currentHeight].push(node?.value);

      recurseInDirection(node, 'left', currentHeight);
      recurseInDirection(node, 'right', currentHeight);
    };

    const recurseInDirection = (node, direction, currentHeight) => {
      if (currentHeight < height)
        flattenTree(node?.[direction], currentHeight + 1);
    };

    const generateString = (currentLayerIndex, previousPadCount) => {
      if (currentLayerIndex < 0) {
        return;
      }

      let currentLayer = treeLayers[currentLayerIndex];
      let padCount = previousPadCount !== null ? previousPadCount * 2 + 1 : 0;
      let padding = ''.padStart(padCount, padderVisual);

      let layerString = currentLayer.reduce((acc, value, valueIndex) => {
        let paddedValue = value?.toString() || leafVisual;

        if (valueIndex < currentLayer.length - 1) {
          paddedValue = paddedValue + padderVisual;
        }

        if (currentLayerIndex < treeLayers.length - 1) {
          paddedValue = padding + paddedValue + padding;
        }

        if (
          currentLayerIndex < treeLayers.length - 1 &&
          valueIndex === currentLayer.length - 1
        ) {
          paddedValue += '\n';
        }

        return acc + paddedValue;
      }, '');

      stringifiedTree = layerString + stringifiedTree;
      generateString(currentLayerIndex - 1, padCount);
    };

    flattenTree(this.root, 0);
    generateString(treeLayers.length - 1, null);
    return stringifiedTree;
  }
}

module.exports = BinaryTree;
