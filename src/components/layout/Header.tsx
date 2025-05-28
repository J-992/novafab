import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../../types';
import styles from '../../styles/components/Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services', // Changed from '#' to actual link
      dropdown: [
        { label: 'Engineering', href: '/services/engineering' },
        { label: 'CNC Machining', href: '/services/cnc-machining' },
        { label: 'Electrical Discharge Machining (EDM)', href: '/services/edm' },
        { label: 'Finishing', href: '/services/finishing' },
        { label: 'Inspections & Testing', href: '/services/inspections-testing' },
      ],
    },
    {
      label: 'Industries',
      href: '/industries', // Changed from '#' to actual link
      dropdown: [
        { label: 'Aerospace', href: '/industries/aerospace' },
        { label: 'Nuclear', href: '/industries/nuclear' },
        { label: 'Robotics', href: '/industries/robotics' },
        { label: 'Defense', href: '/industries/defense' },
      ],
    },
    {
      label: 'About Us',
      href: '#',
      dropdown: [
        { label: 'Company Profile', href: '/about/company-profile' },
        { label: 'Join', href: '/about/join' },
      ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          nova
        </Link>

        <div
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              {item.href === '#' ? (
                <span className={styles.navLink}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              )}
              {item.dropdown && (
                <div className={styles.dropdown}>
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link key={dropdownIndex} to={dropdownItem.href}>
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;