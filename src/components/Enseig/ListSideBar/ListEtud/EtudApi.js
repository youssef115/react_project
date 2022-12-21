import axios from "axios";

export async function getEtud() {

        const response = await axios.get("http://localhost:5000/etudiant/valid");
        console.log(response)
        return response
        
}

export async function deleteEtud(id) {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
        return response;
}
