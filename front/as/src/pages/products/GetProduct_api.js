const api_endPoint = 'http://localhost:5241';

export const getProducts = async () => {
    try {
        const response = await fetch(`${api_endPoint}/api/Product`);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Erro ao obter os dados');
        }
    } catch (error) {
        throw new Error('Erro na requisição: ' + error.message);
    }
};
