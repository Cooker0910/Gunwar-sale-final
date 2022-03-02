import React from 'react';

const Footer = () => {
  return (
    <div className="py-4 w-100 position-absolute bottom-0" style={{
        background: "#201824"
      }}>
      <div className="container">
        <div className="align-items-center d-md-flex justify-content-center">
          <div><span className="fs-1p25" style={{color: "#ffffff"}}>© 2021 GUNWAR ALL RIGHTS RESERVED</span></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;