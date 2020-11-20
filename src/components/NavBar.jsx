import { useState } from "react";
import Image from "next/image";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { Container, Button } from "../ui-kits";

import styles from "./NavBar.module.scss";

const navItems = ["Features", "Pricing", "Resources"];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuIcon = !isOpen ? FiMenu : MdClose;

  return (
    <header>
      <nav className={styles.NavBar}>
        <div className={styles.Container}>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            className={styles.Logo}
            height={28}
            width={100}
          />
          <button
            className={styles.MenuButton}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <MenuIcon size={27} className={styles.MenuIcon} title="Menu" />
          </button>
          {isOpen && (
            <div className={styles.Menu}>
              <ul className={styles.NavList}>
                {navItems.map((item, index) => (
                  <li key={index} className={styles.NavItem}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.Buttons}>
                <Button type="secondary" className={styles.Login}>
                  Login
                </Button>
                <Button type="primary" className={styles.SignUp}>
                  Sign Up
                </Button>
              </div>
            </div>
          )}
          <div className={styles.NavigationDesktop}>
            <ul className={styles.NavListDesktop}>
              {navItems.map((item, index) => (
                <li key={index} className={styles.NavItemDesktop}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.ButtonsDesktop}>
            <Button type="secondary" className={styles.LoginDesktop}>
              Login
            </Button>
            <Button type="primary" className={styles.SignUpDesktop}>
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
