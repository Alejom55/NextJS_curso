'use client'
import { useEffect } from "react"

function Users() {
    useEffect(() => {
        alert('Cargó!')
    }, [])
    return (
        <div>Users</div>
    )
}

export default Users