import axios from "axios";

export async function getCours() {

        const response = await axios.get("http://localhost:5000/cour");
        console.log(response)
        return response
        
}

export async function deletecour(id) {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
        return response;
}
export async function Updatecour(id, values) {
        const response = await axios.put('https://jsonplaceholder.typicode.com/users/'+id, values);
        return response;
}