import React, { Suspense, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './Sidebar.scss';
import { AiOutlineCar, AiOutlineHeart } from 'react-icons/ai';
import { CgList } from 'react-icons/cg';
import { GiBackwardTime, GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { MdPayment } from "react-icons/md";

import AppSpinner from '../components/loading/AppSpinner';
import styles from './ContentLayout.module.css';

const ContentLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggle, setToggle] = useState(true);
  const path = useLocation().pathname;

  const handleHamburger = () => {
    if (toggle) {
      // toggle collapsed if screen size is more than `md`
      setCollapsed(!collapsed);
    } else {
      // open sidebar as expanded (not collapsed)
      setToggle(true);
      setCollapsed(false);
    }
  }

  // close sidebar when
  const handleContentClick = () => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (toggle) {
      setToggle(false);
    }
  }

  useEffect(() => {
    // Prevent content scrolling in overlay mode
    if (toggle) {
      document.body.style.overflowY = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.touchAction = 'auto';
    }
  }, [toggle]);

  return (
    <div className="d-flex">
      <div className={styles.sidebar}>
        <ProSidebar
          breakPoint="md"
          collapsed={collapsed}
          toggled={toggle}
          onToggle={setToggle}
        >
          <Menu className={styles.menu}>
            <MenuItem
              active={path === "/trips"}
              icon={<AiOutlineCar className="fs-1p5" />}>
              <Link to="/trips" />
              Trips
            </MenuItem>
            <MenuItem
              active={path === "/favorites"}
              icon={<AiOutlineHeart className="fs-1p5" />}>
              <Link to="/favorites" />
              Favorites
            </MenuItem>
            <MenuItem
              active={path === "/transactions"}
              icon={<GiBackwardTime className="fs-1p5" />}>
              <Link to="/transactions" />
              Transactions
            </MenuItem>
            <MenuItem
              active={path === "/bookings"}
              icon={<CgList className="fs-1p5" />}>
              <Link to="/bookings" />
              Bookings
            </MenuItem>
            <MenuItem
              active={path === "/account"}
              icon={<HiOutlineUserCircle className="fs-1p5" />}>
              <Link to="/account" />
              Account Settings
            </MenuItem>
            <MenuItem
              active={path === "/payment"}
              icon={<MdPayment className="fs-1p5" />}>
              <Link to="/payment" />
              Payment Method
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>

      <div className={`w-100 ${styles.content}`} onClick={handleContentClick}>
        <div className={styles.nav}>
          <button
            type="button"
            className="btn btn-default"
            onClick={handleHamburger}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div id="app-content-layout" className="app-content-height list-scrollbar position-relative">
          <Suspense fallback={<AppSpinner absolute />}>
            {props.children}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;