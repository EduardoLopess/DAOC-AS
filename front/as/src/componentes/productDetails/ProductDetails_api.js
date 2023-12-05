const api_endPoint = 'http://localhost:5241';
export const getProductById = async (id) => {
    try {
        const response = await fetch(`${api_endPoint}/api/product/${id}`);
        
        if (response.ok) {
            const data = await response.json();
            return data; // Retorna diretamente os dados sem verificar 'data.data'
        } else {
            throw new Error('Erro ao obter os dados');
        }
    } catch (error) {
        throw new Error('Erro na requisição: ' + error.message);
    }
}