import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ExemploAxios() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [clientes, setClientes] = useState([]);

    //função para buscar todos os clientes da API
    const buscarClientes = () => {
        axios.get("https://681bdd736ae7c794cf700455.mockapi.io/clientes")
            .then((response) => setClientes(response.data))
            .catch(() => console.error("Erro ao buscar os clientes"));
    };

    useEffect(() => {
        buscarClientes();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            nome: nome,
            email: email
        }
        axios.post("https://681bdd736ae7c794cf700455.mockapi.io/clientes", newPost)
            .then(() => {
                buscarClientes();
                setNome("");
                setEmail("");
            }).catch(() => {
                console.error("Erro ao gravar na API");

            })
    }

    return (
        <div className="container">
            <h2>Cadastro de Clientes</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            className="my-3 form-control"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            className="my-3 form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} required
                        />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
            <hr />
            <h2>Listagem de Clientes</h2>
            <ul className="list-group">
                {clientes.map((cliente)=>(
                    <li key={cliente.id} className="list-group-item">
                        {cliente.nome} - {clientes.email}
                    </li>
                ))

                }

            </ul>
        </div>
    )
}
