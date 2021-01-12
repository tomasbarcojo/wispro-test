import React from 'react'

export default function GenerateUsers() {
    const handleGenerateUsers = () => {
        fetch('http://localhost:3001/users/seed', {
            method: 'POST'
        })
    }

    return (
        <div>
            <button onClick={handleGenerateUsers}>Generar usuarios</button>
        </div>
    )
}
