import React from'react'
const HeaderLib = () => {
    return ( 
      <section className="app-actionss">
      <div className="app-actions-linee">
        <div className="search-wrappeer">
      
          <input type="text" className="search-inputtt" placeholder="taper votre projet"/>
          <button className="search-btn">Rechercher un projet</button>
        </div>
     
        <div className="app-actions-line filter-line">
        <div className="filter-action-buttons">
          <button className="filter-btn">
          <div className="filter-icon">
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <span className="filter-text">Lun,Nov 10-Mar,Nov 22</span>
        </button>
        <button className="filter-btn">
          <div className="filter-icon">
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <span className="filter-text">Filiere</span>
        </button>
      
   
        <button className="filter-btn more">
          <div className="filter-icon">
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders" viewBox="0 0 24 24">
              <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>
            </svg>
          </div>
          <span className="filter-text">Suite</span>
        </button>
        <button className="wewe5">
          <div className="filter-icon">
          <svg id="bold" enable-background="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z" fill="#ffe6e2"/><path d="m17.5 8h-7.667c-1.013 0-1.833.82-1.833 1.833v10.333c0 1.014.82 1.834 1.833 1.834h4.393c-.36-.76-.56-1.607-.56-2.5 0-.767.147-1.5.42-2.173-.027.007-.053.007-.087.007h-3.333c-.367 0-.667-.3-.667-.667s.301-.667.668-.667h3.333c.253 0 .48.147.587.36.433-.673.993-1.247 1.653-1.693h-5.573c-.367 0-.667-.3-.667-.667s.3-.667.667-.667h6c.367 0 .667.3.667.667 0 .033 0 .06-.007.087.62-.253 1.3-.4 2.007-.413v-3.84c-.001-1.014-.821-1.834-1.834-1.834zm-4.167 4h-2.667c-.366 0-.666-.3-.666-.667s.3-.667.667-.667h2.667c.367 0 .667.3.667.667s-.301.667-.668.667z" fill="#fc573b"/><path d="m19.5 15c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm1.833 5.167h-1.167v1.167c0 .368-.299.667-.667.667s-.667-.299-.667-.667v-1.167h-1.167c-.366 0-.665-.299-.665-.667s.299-.667.667-.667h1.167v-1.167c0-.368.299-.667.667-.667s.667.299.667.667v1.167h1.167c.368 0 .667.299.667.667s-.3.667-.669.667z" fill="#fd907e"/></svg>
          </div>
          <span className="filter-textt">Ajouter</span>
        </button>
        </div>
      </div>  </div>
  
    </section>
     );
}
 
export default HeaderLib;