import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="brand">
        <h1>Rumi</h1>
        <p className="tagline">Automating compliance, illuminating provenance.</p>
      </div>
      <nav className="quick-actions">
        <button>Browse Stones</button>
        <button>Mint New NFT</button>
        <button>Compliance Dashboard</button>
      </nav>
    </header>
  );
}

export default Header;