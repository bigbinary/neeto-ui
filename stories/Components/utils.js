export const loop = (data, key, callback) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].key === key) {
      return callback(data[i], i, data);
    }

    if (data[i].children) {
      loop(data[i].children, key, callback);
    }
  }
};

export const handleOnDrop = ({ info, treeData, setTreeData }) => {
  const dropKey = info.node.key;
  const dragKey = info.dragNode.key;
  const dropPos = info.node.pos.split("-");
  const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

  const data = [...treeData];

  // Find dragObject
  let dragObj;
  loop(data, dragKey, (item, index, arr) => {
    arr.splice(index, 1);
    dragObj = item;
  });
  if (!info.dropToGap) {
    // Drop on the content
    loop(data, dropKey, item => {
      item.children = item.children || [];
      // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
      item.children.unshift(dragObj);
    });
  } else if (
    (info.node.props.children || []).length > 0 &&
    // Has children
    info.node.props.expanded &&
    // Is expanded
    dropPosition === 1 // On the bottom gap
  ) {
    loop(data, dropKey, item => {
      item.children = item.children || [];
      // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
      item.children.unshift(dragObj);
      // in previous version, we use item.children.push(dragObj) to insert the
      // item to the tail of the children
    });
  } else {
    let ar = [];
    let i;
    loop(data, dropKey, (_item, index, arr) => {
      ar = arr;
      i = index;
    });
    if (dropPosition === -1) {
      ar.splice(i, 0, dragObj);
    } else {
      ar.splice(i + 1, 0, dragObj);
    }
  }
  setTreeData(data);
};
