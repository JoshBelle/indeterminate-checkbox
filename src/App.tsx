import React from 'react';
import Tree from './components/Tree';

const data = [
  {
    title: 'title1',
    checked: false,
    categories: [
      { title: 'title1.1', checked: false },
      { title: 'title1.2', checked: false },
      { title: 'title1.3', checked: false },
      {
        title: 'title1.4',
        checked: false,
        categories: [
          { title: 'title1.4.1', checked: true },
          { title: 'title1.4.2', checked: false },
          { title: 'title1.4.3', checked: false },
          { title: 'title1.4.4', checked: false },
          {
            title: 'title1.4.5',
            checked: false,
            categories: [
              { title: 'title1.4.5.1', checked: false },
              { title: 'title1.4.5.2', checked: false },
              { title: 'title1.4.5.3', checked: false }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'title2',
    checked: false,
    categories: [
      { title: 'title2.1', checked: false },
      { title: 'title2.2', checked: false },
      { title: 'title2.3', checked: false },
      { title: 'title2.4', checked: false }
    ]
  }
];

const App: React.FC = () => (
  <div>
    <Tree data={data} />
  </div>
);

export default App;
