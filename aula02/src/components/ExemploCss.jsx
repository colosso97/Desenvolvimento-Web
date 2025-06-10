import "./components/ExemploCss.css";
import Caixa from "./components/Caixa";
import "./components/ExemploCss.css";          
import Button from "./components/Button";

export default function ExemploCss() {
    const texto = {
        color: "green",
        fontSize: "2em",
    };

    return (
        <div>
            <h1 style = {{color: "#000", fontSize: "4em"}}>Aula de React - CSS</h1>
            <h2 style = {texto}>Css incorporado</h2>
            <h3 className="frase">Css no arquivo</h3>
            <Caixa cor="orange"/>
            <Button />
            <button className="botao">Clique aqui2</button>
        </div>
    );
}
