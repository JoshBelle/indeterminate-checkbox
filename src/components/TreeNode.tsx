import React, { useState, useEffect } from 'react';

interface Category {
    title: string;
    checked: boolean;
    indeterminate?: boolean; 
    categories?: Category[];
  }
  

interface TreeNodeProps {
  node: Category;
  onCheck: (node: Category, checked: boolean) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, onCheck }) => {
  const [checked, setChecked] = useState(node.checked);
  const [indeterminate, setIndeterminate] = useState(false);

  useEffect(() => {
    const allChecked = node.categories?.every(child => child.checked) ?? false;
    const someChecked = node.categories?.some(child => child.checked || child.indeterminate) ?? false;

    if (allChecked) {
      setChecked(true);
      setIndeterminate(false);
    } else if (someChecked) {
      setChecked(false);
      setIndeterminate(true);
    } else {
      setChecked(false);
      setIndeterminate(false);
    }
  }, [node.categories]);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onCheck(node, e.target.checked);
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <input
        type="checkbox"
        checked={checked}
        ref={(el) => {
          if (el) el.indeterminate = indeterminate;
        }}
        onChange={handleCheck}
      />
      {node.title}
      {node.categories && node.categories.map((child, index) => (
        <TreeNode key={index} node={child} onCheck={onCheck} />
      ))}
    </div>
  );
};

export default TreeNode;
