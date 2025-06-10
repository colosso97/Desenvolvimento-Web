
export default function Aluno(props, matriculado) {
    return (
        <div>
            <p> Nome:{props.nome}</p>
            <p> Email:{props.email}</p>
            <p> Telefone:{props.telefone}</p>
            <p>O aluno está matriculado? {matriculado ? "Sim" : "Não"}</p>
        </div>
    )
}
