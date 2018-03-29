import TreeNode from 'dummy/utils/tree-node';

const generateBasicRoot = (childCount = 10) => {
  let topRow = new TreeNode('Top Row');

  for (let i = 0; i < childCount; i++) {
    let header = new TreeNode(`Header ${i}`);
    for (let j = 0; j < childCount; j++) {
      let group = new TreeNode(`Group ${j}`);
      for (let k = 0; k < childCount; k++) {
        group.addChild(new TreeNode(`Leaf ${k}`));
      }

      header.addChild(group);
    }

    topRow.addChild(header);
  }

  let root = new TreeNode('Root');
  root.addChild(topRow);

  root.updateNext(null);
  root.updateNodeCountAndIndex(-1);

  return root;
};

export {
  generateBasicRoot
};
