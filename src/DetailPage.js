import React from 'react'
import './assets/DetailPage.css'
import Logo from './assets/logo.png'
import Image1 from './assets/camylla.jpg'

const DetailPage = () => {
  const cashMoney = '300.900';

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
      <div className='page'>
        <div className='page-content'>
          <div className='left-page'>
            <img src={Image1} alt='image'></img>

          </div>
          <div className='right'>
            <div className='right-page'>
              <div>
                <h2 className='title'>Mouse</h2>
                <p className='stock'>Stock: 600</p>
                <div>
                  <p>- Wireless Mouse</p>
                  <p>- Konektivitas wireless 2.4 GHz</p>
                  <p>- Jarak wireless hingga 10 m</p>
                  <p>- Plug and Play</p>
                  <p>- Baterai tahan hingga 12 bulan</p>
                </div>
              </div>

              <div className='page-detail'>
                <p>
                  Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                </p>
              </div>
              <p className='cash'>Rp.{cashMoney} </p>
              <div>
                <button>Buy</button>
              </div>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default DetailPage