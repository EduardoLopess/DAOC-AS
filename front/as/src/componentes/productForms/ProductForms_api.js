const api_endPoint = 'http://localhost:5241';

export const postFormData = async (formData) => {
    try{
        const response = await fetch(`${api_endPoint}/api/Product`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        });
    
        if(response.ok){
            return await response.json();
        } else {
            throw new Error('Erro ao enviar os dados');
        } 
    }catch (error){
        throw new Error('Erro na requisição: ' + error.message);
    }
}