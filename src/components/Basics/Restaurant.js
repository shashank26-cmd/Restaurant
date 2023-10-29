import React, { useState } from 'react';
import './Style.css';
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((currElem) => currElem.category)), 'All'];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === 'All') {
      setMenuData(Menu);
    } else {
      const updatedList = Menu.filter((currElem) => currElem.category === category);
      setMenuData(updatedList);
    }
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
