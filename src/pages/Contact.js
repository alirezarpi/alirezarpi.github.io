import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Alireza Khalili via email @ alireza.kh077@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to email me at <a href="mailto:alireza.kh077@yahoo.com">alireza.kh077@gmail.com</a>.</p>
        <p>Or call me on this <a href="tel:+98-939-4493392">+98-939-4493392</a>.</p>
        <p>You can get access to me by any of the links listed bellow.</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
