// import React from 'react'
// import { AdminLoginForm } from '../../components'

// export default function AdminLogin() {
//     return (
//         <div>
//             {/* This will be a login page for the Admin.
//             <br />
//             Dashboard will live <a href="/admin/dashboard">HERE</a>
//             <br />
//             <a href="/">Return Home</a> */}
//             <AdminLoginForm />
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react'
import { AdminLoginForm } from '../../components'
import { useRouter } from 'next/router'
//import Auth from '../../../utils/auth'
import Auth from '../../utils/auth'

export default function AdminLogin() {

    const router = useRouter();

    //const [token, setToken] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        document.title = 'Admin Login'
        // check if logged in
        const userLoggedIn = Auth.loggedIn();
        setLoggedIn(userLoggedIn);
        //const userToken = Auth.getToken() || '';
        //setToken(userToken)
        
    }, [])

    if (loggedIn) {
        //console.log('got token')
        router.replace('/admin/dashboard');
        return null;
    }
    

    return (
        <div>
            {/* This will be a login page for the Admin.
            <br />
            Dashboard will live <a href="/admin/dashboard">HERE</a>
            <br />
            <a href="/">Return Home</a> */}
            <AdminLoginForm />
        </div>
    )
}