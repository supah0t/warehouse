import { FC, Dispatch, SetStateAction, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import {
  HouseDoorFill,
  Icon1SquareFill,
  Icon2SquareFill,
  Icon3SquareFill,
  Icon4SquareFill,
  MenuButtonWide,
  Gear,
  ListColumnsReverse,
  Dice6,
} from 'react-bootstrap-icons';

import './style.css';

type SidebarProps = {
  currentItem?: string;
  setCurrentItem: Dispatch<SetStateAction<string>>;
};

const menuItems = [
  {
    itemKey: 'mainPage',
    text: 'Κεντρική σελίδα',
    icon: <HouseDoorFill />,
  },
  {
    itemKey: 'storeOne',
    text: 'Αποθήκη 1',
    icon: <Icon1SquareFill />,
  },
  {
    itemKey: 'storeTwo',
    text: 'Αποθήκη 2',
    icon: <Icon2SquareFill />,
  },
  {
    itemKey: 'storeThree',
    text: 'Αποθήκη 3',
    icon: <Icon3SquareFill />,
  },
  {
    itemKey: 'storeFour',
    text: 'Αποθήκη 4',
    icon: <Icon4SquareFill />,
  },
];

export const Sidebar: FC<SidebarProps> = ({ currentItem, setCurrentItem }) => {
  const clickNavItem = (key: string) => {
    setCurrentItem(key);
  };

  useEffect(() => {
    if (!currentItem) setCurrentItem(menuItems[0].itemKey);
  }, [currentItem]);

  return (
    <div className="sidebar-content">
      <div className="logo">
        <Dice6 />
        <div>Warehouse management</div>
      </div>
      <div className="menu">
        <div className="menu-header">
          <MenuButtonWide />
          <p>ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</p>
        </div>
        <Nav className="flex-column">
          {menuItems.map((item, i) => (
            <div
              key={`${i}-${item.itemKey}`}
              className={`${
                item.itemKey === currentItem ? 'active-item' : ''
              } menu-item `}
            >
              {item.icon}
              <Nav.Link
                key={item.itemKey}
                eventKey={item.itemKey}
                onClick={() => clickNavItem(item.itemKey)}
                className={`${
                  currentItem === item.itemKey ? 'active-item' : ''
                } `}
              >
                {item.text}
              </Nav.Link>
            </div>
          ))}
        </Nav>
        <div className="gap-30" />
        <div className="menu-header">
          <MenuButtonWide />
          <p>ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</p>
        </div>
        <Nav className="flex-column" activeKey={undefined}>
          <div
            className={`${
              currentItem === 'submit' ? 'active-item' : ''
            } menu-item `}
          >
            <ListColumnsReverse />
            <Nav.Link
              key="submit"
              eventKey="submit"
              className={`${currentItem === 'submit' ? 'active-item' : ''} `}
              onClick={() => clickNavItem('submit')}
            >
              Καταχώριση
            </Nav.Link>
          </div>
        </Nav>
      </div>
      <div className="settings">
        <div className="menu-header" onClick={() => console.log('settings')}>
          <Gear />
          <p>ΡΥΘΜΙΣΕΙΣ</p>
        </div>
      </div>
    </div>
  );
};
