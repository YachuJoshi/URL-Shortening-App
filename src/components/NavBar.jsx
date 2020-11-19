import { useState } from "react";
import Image from "next/image";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import styles from "./NavBar.module.scss";

const navItems = ["Features", "Pricing", "Resources"];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuIcon = !isOpen ? FiMenu : MdClose;

  return (
    <header>
      <nav className={styles.NavBar}>
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
              <button className={styles.Login}>Login</button>
              <button className={styles.SignUp}>Sign Up</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
