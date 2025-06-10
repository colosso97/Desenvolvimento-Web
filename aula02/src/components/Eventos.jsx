import React from 'react'

export default function () {
    const handleClick = (e) => {
        alert("Você clicou no botão!");
    }
    
    return (
        <div>
            <h2>Trabalahndo com eventos</h2>
            <button onClick={handleClick}>Evento de click</button>
            <p>Segundo botão de evento</p>
            <button
                onClick={() => {
                    alert("Você clicou no segundo botão!");
                }}
            >
                Evento de clique
            </button>
        </div>
    )
}
