import React from 'react'
import {useSelector} from 'react-redux'

export default function Navbar() {
const {isAuthenticated} = useSelector(state => state.auth.isAuthenticated);
    return (
        <>
        {!isAuthenticated ? <div>Navbar</div> : null}
        </>
  )
}
