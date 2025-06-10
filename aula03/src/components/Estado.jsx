import { useState } from 'react';

export default function Estado() {
    // let valor = 100;
    const [valor, setValor] = useState(1);
    const [nome, setNome] = useState('João');
    const [contador, setContador] = useState(0);
    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
    const resetar = () => setContador(0);


    const mudarNome = () => {
        setNome(prevNome => (prevNome === "Antonio" ? "João" : "Antonio"));
    };


    // function calcular(){
    //     valor = valor * 2;
    //     console.log(valor);
    // }


    return (
        <div>
            <h1>Exemplo uso do States</h1>
            <p>Resultado: {valor}</p>
            <p>Nome: {nome}</p>
            <button onClick={() => setValor(valor * 2)}>Calcular</button>
            <button onClick={() => setNome('Marcelo')}>Trocar</button>
            <button onClick={mudarNome}>Trocar nome</button>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}> + </button>
            <button onClick={decrementar}> - </button>
            <button onClick={resetar}> reset </button>
        </div>

    );

}
