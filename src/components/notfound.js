import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div style={{padding:50}}>
            <h1>404 Not Found</h1>
            Retry from home or url please.<br />
            If you can use untackbook same error,<br />
            Email me (k_star_w@naver.com)<br />
            <br />
            <Link to="/">Go home</Link>
        </div>
    )
}

export default NotFound