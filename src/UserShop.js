import React from 'react'
import './assets/UserShop.css'
import Logo from './assets/logo.png'
import Image1 from './assets/camylla.jpg'

const UserShop = () => {

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
                                <a href=''>Complain</a>
                            </li>
                            <li>
                                <a href=''>Profil</a>
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
                    <h2>Product</h2>
                    <div className='list-product'>
                        <div className='card'>
                            <img src={Image1} alt="image1"></img>
                            <div className='desc'>
                                <p className='merc'>Mouse</p>
                                <p>Rp. 500.000</p>
                                <p>Stock: 600</p>
                            </div>
                        </div>

                        <div className='card'>
                            <img src={Image1} alt="image1"></img>
                            <div className='desc'>
                                <p className='merc'>Keyboard</p>
                                <p>Rp. 700.000</p>
                                <p>Stock: 600</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>

    )
}

export default UserShop