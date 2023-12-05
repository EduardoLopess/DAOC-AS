import '../filter/Filter.css'

const Filter = () => {
    return (

        <nav className='filter-container'>
            <div>
                <h4>Filtro de orndenação</h4>
            </div>
            <ul>
                <li>
                    <select name="ordenacao" id="categoria">
                        <option value="">Ordenção..</option>
                        <option value="crescente">crescente..</option>
                        <option value="descrente">descrente..</option>
                    </select>
                </li>
                <li>
                    <select name="categoria" id="categoria">
                        <option value="">Categoria..</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>
                </li>
               
            </ul>
        </nav>
    );
}
export default Filter