import TreeNode from 'dummy/utils/tree-node';

const generateBasicRoot = (childCount = 10) => {
  let topRow = new TreeNode(null, 'Top Row');

  for (let i = 0; i < childCount; i++) {
    let header = new TreeNode(topRow, `Header ${i}`);
    for (let j = 0; j < childCount; j++) {
      let group = new TreeNode(header, `Group ${j}`);
      for (let k = 0; k < childCount; k++) {
        group.addChild(new TreeNode(group, `Leaf ${k}`));
      }

      header.addChild(group);
    }

    topRow.addChild(header);
  }

  let root = new TreeNode(null, 'Root');
  root.addChild(topRow);

  root.updateNext(null);
  root.updateNodeCountAndIndex(-1);

  return root;
};

export {
  generateBasicRoot
};
