import axios from "axios";

const API_URL = 'https://crud-de-marcas.onrender.com/api/project/';

//Lista de Marcas Registradas
export const getRecords = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data.results;
    } catch (error) {
        console.error(error);       
    }
}

//Crear Registro
export const createRecords = async (Params) => {
    try {
        const response = await axios.post(API_URL, Params);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
}

// //Actualizar Registro
// export const updateRecords = async () => {
//     try {
//         const response = await axios.put();
//         return response.data.results
//     } catch (error) {
//         console.error(error);
//     }
// }

// //Eliminar Registro
// export const deleteRecords = async () => {
//     try {
//         await axios.delete(API_URL, );
//         return response.data.results
//     } catch (error) {
//         console.error(error);
//     }
// }