import React from 'react'
import './assets/Profil.css'
import Logo from './assets/logo.png'
import Image1 from './assets/camylla.jpg'
import { Link } from "react-router-dom";

function Profil() {
  return (
    <div>
      <div className='navbar'>
        <div className='left'>
          <img src={Logo} alt="logo"></img>
        </div>
        <div className='right'>
          <div className='right-list'>
            <ul>
              <li>
                <Link to='/'>login</Link>
              </li>
              <li>
                <a href='' className='profil'>Profil</a>
              </li>
              <li>
                <a href=''>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='product'>
        <div className='product-main'>
          <h4 className='profil'>My Profile</h4>
          <div className='list-product'>
            <div className='card'>
              <img src={Image1} alt="image1"></img>
            </div>

            <div className='biodata'>
              <div>
                <h5>Name</h5>
                <p>Yosep</p>
              </div>

              <div>
                <h5>Email</h5>
                <p>Yosepgans@gmail.com</p>
              </div>

              <div>
                <h5>Phone</h5>
                <p>082288261997</p>
              </div>

              <div>
                <h5>Gender</h5>
                <p>Male</p>
              </div>

              <div>
                <h5>Address</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>

            </div>

            <div>
              <h4 className='title-transaction'>My Transaction</h4>
            </div>
            <div className='transaction'>
              <div className='main-content'>
                <div className='left-side'>
                  <img src={Image1} alt='image1'></img>
                </div>
                <div className='right-side'>
                  <h5>Mouse</h5>
                  <p>
                    Saturday, 14 Juli 2021
                  </p>

                  <div className='price'>
                    <label>Price Rp: 500.000</label>
                  </div>

                  <div className='price-money'>
                    <label>Sub Total: 500.000</label>
                  </div>
                </div>

                <div className='right-image'>
                  <img src={Logo} alt='image'></img>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Profil