import React, { useState } from 'react';
import TreeNode from './TreeNode';

interface Category {
  title: string;
  checked: boolean;
  categories?: Category[];
}

interface TreeProps {
  data: Category[];
}

const Tree: React.FC<TreeProps> = ({ data }) => {
  const [treeData, setTreeData] = useState(data);

  const handleCheck = (node: Category, checked: boolean) => {
    const updateCheckedState = (node: Category, checked: boolean) => {
      node.checked = checked;
      if (node.categories) {
        node.categories.forEach(child => updateCheckedState(child, checked));
      }
    };

    const updateTree = (nodes: Category[]): Category[] => {
      return nodes.map(n => {
        if (n === node) {
          updateCheckedState(n, checked);
        } else if (n.categories) {
          n.categories = updateTree(n.categories);
        }
        return n;
      });
    };

    setTreeData(updateTree(treeData));
  };

  return (
    <div>
      {treeData.map((node, index) => (
        <TreeNode key={index} node={node} onCheck={handleCheck} />
      ))}
    </div>
  );
};

export default Tree;
