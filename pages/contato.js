import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

const Contact = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Contato"
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <h1>Contact</h1>
      <style jsx>{``}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default Contact;
