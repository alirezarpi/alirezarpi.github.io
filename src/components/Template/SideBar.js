import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Alireza Khalili</h2>
        <p><a href="mailto:alireza.kh077@gmail.com">alireza.kh077@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Alireza. I like building things.
        Someone who is in love with Linux and its architecture and
        open source advocate with passion for being a great DevOps engineer.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alireza Khalili <Link to="/">alirezakhalili.ir</Link>.</p>
    </section>
  </section>
);

export default SideBar;
