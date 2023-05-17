import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bag from '../assets/img/bag.png';
import { useRouter } from 'next/router';

const OffCanvasSidebar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter();

  const handleLinkClick = () => {
    onClose(); // Close the sidebar when a link is clicked
  };

  return (
    <div className="offcanvas-sidebar">
      <button className="offcanvas-close" onClick={onClose}>
        <span>&times;</span>
      </button>
      <ul>
        <li>
          <Link href="/search">
            <a onClick={handleLinkClick}>Search</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a onClick={handleLinkClick}>Log In</a>
          </Link>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>
            Help
          </a>
        </li>
        <li>
          <a href="#bag" onClick={handleLinkClick}>
            <Image src={bag} alt="Bag" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OffCanvasSidebar;
