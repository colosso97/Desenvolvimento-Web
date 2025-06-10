import React, { useEffect, useState } from 'react'

export default function Effect() {
    const [contador, setContador] = useState(0);
    const[nome, setNome] = useState("joão");
    const[texto, setTexto] = useState("Exemplo");
    const[hora, setHora] = useState(new Date());
    const[user, setUser] = useState({});

    useEffect(()=>{
        fetch("https://api.github.com/users/colosso97")
        .then((resposta) => resposta.json())
        .then((json) => setUser(json));
    },[]);


    useEffect(()=>{
        setInterval(()=>{
            setHora(new Date());
        },1000)
    },[hora]);

    return (
        <div>
                <p>Login:{user.login}</p>
                <img src={user.avatar_url} alt="Imagem" />

                <p>Hora:{hora.toLocaleTimeString()}</p>
                <p>{texto}</p>
                <p>Contador:{contador}</p>
                <p>Nome:{nome}</p>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
                <button onClick={(prevNome) => setNome(prevNome === "Antônio" ? "João" : "Antônio")}>
                    Alterar Nome
                </button>
        </div>
    );
}
