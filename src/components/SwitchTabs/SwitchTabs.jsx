import { useState } from 'react';
import './SwitchTabs.scss';

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className='switching-tabs'>
      <div className='switching-tabs__items'>
        {data.map((tab, index) => (
          <span
            onClick={() => activeTab(tab, index)}
            key={index}
            className={`switching-tabs__items__item ${
              selectedTab === index ? 'active' : ''
            }`}
          >
            {tab}
          </span>
        ))}
        <span className='movingBg' style={{ left: left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
