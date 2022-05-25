import React from 'react'
import travolta from '../public/assets/404.png';

export default function Custom404() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100%', textAlign: 'center' }}>
            <h1>404</h1>
            <p>It broke :/</p>
            <img src={travolta.src} alt="Rockademy" style={{ width: '60%', margin: '0 auto' }} />
            <br />
            <div><button style={{ background: 'grey', marginBottom: '20px', color: 'white', borderRadius: '8px', width: '120px' }} type="button"><a href="/">Return Home</a></button></div>
        </div>
    )
}
