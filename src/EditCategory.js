import React from 'react'
import './assets/EditCategory.css'
import Logo from './assets/logo.png'

const EditCategory = () => {
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
                                <a href='' style={{ color: '#F74D4D' }}>Category</a>
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
                    <h2>Edit Category</h2>
                    <input type='text' placeholder='Mouse' />
                    <div>
                        <button>Save</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditCategory