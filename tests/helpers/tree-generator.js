import TreeNode from 'dummy/utils/tree-node';

const generateBasicRoot = () => {
  const topRow = new TreeNode(null, 'Top Row');

  for (let i = 0; i < 10; i++) {
    const header = new TreeNode(topRow, `Header ${i}`);
    for (let j = 0; j < 10; j++) {
      const group = new TreeNode(header, `Group ${j}`);
      for (let k = 0; k < 10; k++) {
        group.addChild(new TreeNode(group, `Leaf ${k}`));
      }

      header.addChild(group);
    }

    topRow.addChild(header);
  }

  const root = new TreeNode(null, 'Root');
  root.addChild(topRow);

  root.updateNext(null);
  root.updateNodeCountAndIndex(-1);

  return root;
};

export {
  generateBasicRoot
};
