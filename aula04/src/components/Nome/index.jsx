import React, { useState, useContext } from 'react'
import { UserContext } from '../../contexts/user';

export default function Nome() {
    const[novoNome, setNovoNome] = useState("");
    const{nomeAluno, setNomeAluno, total} = useContext(UserContext);
    

    return (
        <div>
            <p>Total Geral: {total}</p>
            <h2>Nome do Aluno:{nomeAluno}</h2>
            <input placeholder='Digite o novo nome'
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)} />
            <button onClick={() => {setNomeAluno(novoNome)}}>Alterar Nome</button>
        </div>
    )
}
