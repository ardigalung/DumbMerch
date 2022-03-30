import React from 'react'
import './assets/ConfirmCategory.css'

const ConfirmCategory = () => {
    return (
        <div>
            <div className='delete'>
                <div className='delete-pop'>
                    <h3>Delete Data</h3>
                    <p>Are you sure want to delete this data?</p>

                    <div className='tombol'>
                        <button>No</button>
                        <button>Yes</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ConfirmCategory