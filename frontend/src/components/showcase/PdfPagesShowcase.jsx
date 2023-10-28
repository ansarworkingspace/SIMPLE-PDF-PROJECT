

import React from 'react';
import './PdfShowcase.css';

const PdfShowcase = () => {
  return (
    <div className="pdf-showcase">
      <div className="pdf-page-box">
        <div className="inner-box">
          <div className="additional-div">Content Here</div>
        </div>
        <div className="page-number">1</div>
        <input type="checkbox" name="pdf-page" value="1" />
      </div>
      <div className="pdf-page-box">
        <div className="inner-box">
          <div className="additional-div">Content Here</div>
        </div>
        <div className="page-number" >2</div>
        <input type="checkbox" name="pdf-page" value="2" />
      </div>
    </div>
  );
};

export default PdfShowcase;
