import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="page-footer">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-5 mt-md-0 mt-3">
          <h3 className="text-uppercase">Heagle</h3> 
          <p>Content about Heagle.</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-3" />
        <div className="col-md-2 mb-md-0 mb-3">
          <h6 className="text-uppercase text-left">Menu</h6>
          <ul className="list-unstyled">
            <li>
              <a className="footer-link" href="#!">Link 1</a>
            </li>
            <li>
              <a className="footer-link" href="#!">Link 2</a>
            </li>
            <li>
              <a className="footer-link" href="#!">Link 3</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 mb-md-0 mb-3">
          <h6 className="text-uppercase text-left">My Account</h6>
          <ul className="list-unstyled">
            <li>
              <a className="footer-link" href="#!">Link 1</a>
            </li>
            <li>
              <a className="footer-link" href="#!">Link 2</a>
            </li>
            <li>
              <a className="footer-link" href="#!">Link 3</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 mb-md-0 mb-3">
          <h6 className="text-uppercase text-left">Stay Updated</h6>
          <ul className="list-unstyled">
            <li>
              <a className="footer-link" href="#!">Link 1</a>
            </li>
            <li>
              <a className="footer-link" href="#!">Link 2</a>
            </li>
            <li>
              <a className="footer-link" href="#!">Link 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer