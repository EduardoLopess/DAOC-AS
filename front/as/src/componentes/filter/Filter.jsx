import '../filter/Filter.css'

const Filter = ({setCategoryFilter, setSortByPrice }) => {
    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
      };
    
      const handleSortChange = (e) => {
        setSortByPrice(e.target.value);
      };

    return (

        <nav className='filter-container'>
            <div>
                <h4>Filtro de orndenação</h4>
            </div>
            <ul>
                <li>
                    <select name="ordenacao" id="ondenacao" onChange={handleSortChange}>
                        <option value="">Ordenção..</option>
                        <option value="crescente"> Valo crescente..</option>
                        <option value="descrente">Valor descrente..</option>
                    </select>
                </li>
                <li>
                    <select name="categoria" id="categoria" onChange={handleCategoryChange}>
                        <option value="">Categoria..</option>
                        <option value="Eletrônicos">Eletrônicos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Beleza">Beleza</option>
                        <option value="Casa">Casa</option>
                        <option value="Esportes">Esportes</option>
                        <option value="Comida">Comida</option>
                        <option value="Livros">Livros</option>
                        <option value="Saúde">Saúde</option>
                        <option value="Brinquedos">Brinquedos</option>
                        <option value="Automotivo">Automotivo</option>
                        <option value="Joias">Joias</option>
                        <option value="Móveis">Móveis</option>
                        <option value="Móveis">Suprimentos para Animais</option>
                    </select>
                </li>
               
            </ul>
        </nav>
    );
}
export default Filter