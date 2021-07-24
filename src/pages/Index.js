import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Alireza Khalili's personal website.DevOps Engineer @ RDSysCo"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Alireza Khalili Personal Web Site</Link></h2>
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
