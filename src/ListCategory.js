import React from 'react'
import './assets/ListCategory.css'
import Logo from './assets/logo.png'

const ListCategory = () => {
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
                    <h2>List Category</h2>
                    <table>
                        <tr>
                            <th>No</th>
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mouse</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Keyboard</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Bag</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Doll</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>

                    </table>
                </div>

            </div>
        </div>
    )
}

export default ListCategory