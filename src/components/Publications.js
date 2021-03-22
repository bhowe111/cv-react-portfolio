import React from "react";

const Publications = () => {
  return (
    <>
      <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
          <div className="column large-12">
            <h3>Some of My Publications</h3>
          </div>
        </div>
        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
          <div className="column folio-item">
            <a href="#modal-01" className="folio-item__thumb">
              <img
                src="images/portfolio/DuoNoireArticle600x650.png"
                // srcSet="images/portfolio/droplet.jpg 1x,
                //                  images/portfolio/droplet@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-02" className="folio-item__thumb">
              <img
                src="images/portfolio/YuvalSharon600x650.png"
                // srcSet="images/portfolio/lamp.jpg 1x,
                //                  images/portfolio/lamp@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-03" className="folio-item__thumb">
              <img
                src="images/portfolio/ThirdAngle600x650.png"
                // srcSet="images/portfolio/minimalismo.jpg 1x,
                //                  images/portfolio/minimalismo@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-04" className="folio-item__thumb">
              <img
                src="images/portfolio/Quantum600x650.png"
                // srcSet="images/portfolio/minimalismo.jpg 1x,
                //                  images/portfolio/minimalismo@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
          <div className="column folio-item">
            <a href="#modal-05" className="folio-item__thumb">
              <img
                src="images/portfolio/CustomerMgmt600x650.png"
                // srcSet="images/portfolio/minimalismo.jpg 1x,
                //                  images/portfolio/minimalismo@2x.jpg 2x"
                alt=""
              />
            </a>
          </div>{" "}
          {/* end folio-item */}
        </div>{" "}
        {/* end folio-list */}
        {/* Modal Templates Popup
        =========================================================== */}
        <div id="modal-01" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-droplet.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>Droplet</h5>
              <p>
                Odio soluta enim quos sit asperiores rerum rerum repudiandae
                cum. Vel voluptatem alias qui assumenda iure et expedita
                voluptatem. Ratione officiis quae.
              </p>
              <ul className="modal-popup__cat">
                <li>Branding</li>
                <li>Product Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">
              Project link
            </a>
          </div>
        </div>{" "}
        {/* end modal */}
        <div id="modal-02" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-lamp.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>The Lamp</h5>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <ul className="modal-popup__cat">
                <li>Branding</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">
              Project link
            </a>
          </div>
        </div>{" "}
        {/* end modal */}
        <div id="modal-03" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/gallery/g-minimalismo.jpg" alt="" />
            <div className="modal-popup__desc">
              <h5>Minimalismo</h5>
              <p>
                Exercitationem reprehenderit quod explicabo consequatur aliquid
                ut magni ut. Deleniti quo corrupti illum velit eveniet ratione
                necessitatibus ipsam mollitia.
              </p>
              <ul className="modal-popup__cat">
                <li>Product Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">
              Project link
            </a>
          </div>
        </div>{" "}
        {/* end modal */}
        <div id="modal-04" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/Quantum600x650.png" alt="" />
            <div className="modal-popup__desc">
              <h5>Minimalismo</h5>
              <p>
                Exercitationem reprehenderit quod explicabo consequatur aliquid
                ut magni ut. Deleniti quo corrupti illum velit eveniet ratione
                necessitatibus ipsam mollitia.
              </p>
              <ul className="modal-popup__cat">
                <li>Product Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">
              Project link
            </a>
          </div>
        </div>{" "}
        {/* end modal */}
        <div id="modal-05" hidden>
          <div className="modal-popup">
            <img src="images/portfolio/CustomerMgmt600x650.png" alt="" />
            <div className="modal-popup__desc">
              <h5>Customer Management</h5>
              <p>
                Exercitationem reprehenderit quod explicabo consequatur aliquid
                ut magni ut. Deleniti quo corrupti illum velit eveniet ratione
                necessitatibus ipsam mollitia.
              </p>
              <ul className="modal-popup__cat">
                <li>Product Design</li>
              </ul>
            </div>
            <a href="https://www.behance.net/" className="modal-popup__details">
              Project link
            </a>
          </div>
        </div>{" "}
        {/* end modal */}
      </section>{" "}
      {/* end s-portfolio */}
    </>
  );
};

export default Publications;
