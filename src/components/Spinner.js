import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
        return (
            <div className='text-center d-flex align-center justify-content-center'>
                <img src={loading} alt="loading" />
            </div>
        )
    
}

export default Spinner;
