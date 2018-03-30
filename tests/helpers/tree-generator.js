import TreeNode from 'dummy/utils/tree-node';

const generateBasicRoot = (childCount = 10, useGlobalId = false) => {
  let topRow = new TreeNode('Top Row');

  let id = 0;
  for (let i = 0; i < childCount; i++) {
    id = useGlobalId ? ++id : i;
    let header = new TreeNode(`Header ${id}`);
    for (let j = 0; j < childCount; j++) {
      id = useGlobalId ? ++id : j;
      let group = new TreeNode(`Group ${id}`);
      for (let k = 0; k < childCount; k++) {
        id = useGlobalId ? ++id : k;
        group.addChild(new TreeNode(`Leaf ${id}`));
      }

      header.addChild(group);
    }

    topRow.addChild(header);
  }

  let root = new TreeNode('Root');
  root.addChild(topRow);

  root.initializePointers(null);
  root.initializeMetadata(-1, -1);

  return root;
};

export {
  generateBasicRoot
};
