import { useState } from "react";
import "./style.css";
export default function Form() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [faixa, setFaixa] = useState('');

    const calculoFaixa = (imc) => {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc < 25) return "Peso normal";
        if (imc < 30) return "Sobrepeso";
        if (imc < 35) return "Obesidade grau 1";
        if (imc < 40) return "Obesidade grau 2";
        return "Obesidade grau 3 (mórbida)";
    };

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);
    const [n4, setN4] = useState(0);
    const [media, setMedia] = useState('');

    const handleSubmit1 = (m) => {
        e.preventDefault();
        const mediaVal = (n1 + n2 + n3 + n4) / 4;

        if (mediaVal >= 7) setMedia("Aprovado");
        else setMedia("Reprovado");
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //tirar o refresh automatico, pq calculava e já zerava o resultado
        const calculo = ((peso / altura ** 2).toFixed(2)); //tofixed limita as casas decimais
        setImc(calculo);
        setFaixa(calculoFaixa(calculo));
    };

    return (
        <div>
            <form className="formulario" onSubmit={handleSubmit}>
                <label htmlFor="peso">Peso:</label>
                <input
                    type="number"
                    name="peso"
                    id="peso"
                    required
                    value={peso}
                    onChange={(e) => {
                        setPeso(e.target.value);
                    }}
                />

                <label htmlFor="altura">Altura:</label>
                <input
                    type="number"
                    name="altura"
                    id="altura"
                    required
                    value={altura}
                    onChange={(e) => {
                        setAltura(e.target.value);
                    }}
                />

                {peso && altura ?
                    <label>Resultado: {imc}</label>
                    : ""}

                {imc && faixa ?
                    <label>Faixa de Peso: {faixa}</label>
                    : ""}

                <button className="botao">Calcular</button>
            </form>

            <form className="formulario" onSubmit={handleSubmit1}>
                <label htmlFor="n1">Nota 1:</label>
                <input
                    type="number"
                    id="n1"
                    name="n1"
                    required
                    value={n1}
                    onChange={(m) => {
                        setN1(parseFloat(m.target.value))
                    }}
                />

                <label htmlFor="n2">Nota 2:</label>
                <input
                    type="number"
                    id="n2"
                    name="n2"
                    required
                    value={n2}
                    onChange={(m) => {
                        setN2(parseFloat(m.target.value))
                    }}
                />

                <label htmlFor="n3">Nota 3:</label>
                <input
                    type="number"
                    id="n3"
                    name="n3"
                    required
                    value={n3}
                    onChange={(m) => {
                        setN3(parseFloat(m.target.value))
                    }}
                />

                <label htmlFor="n4">Nota 4:</label>
                <input
                    type="number"
                    id="n4"
                    name="n4"
                    required
                    value={n4}
                    onChange={(m) => {
                        setN4(parseFloat(m.target.value))
                    }}
                />

                {n1 && n2 && n3 && n4 ? <label>Resultado: {media}</label> : ""}

                <button className="botao" type="submit">Calcular</button>
            </form>
        </div>
    );

}

