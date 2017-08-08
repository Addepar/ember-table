import TreeNode from 'dummy/utils/tree-node';

const generateBasicRoot = () => {
  const root = new TreeNode(null, 'Root');

  for (let i = 0; i < 10; i++) {
    const header = new TreeNode(root, `Header ${i}`);
    for (let j = 0; j < 10; j++) {
      const group = new TreeNode(header, `Group ${j}`);
      for (let k = 0; k < 10; k++) {
        group.addChild(new TreeNode(group, `Leaf ${k}`));
      }

      header.addChild(group);
    }

    root.addChild(header);
  }

  root.updateNext(null);
  root.updateNodeCountAndIndex(0);

  return root;
};

export {
  generateBasicRoot
};
