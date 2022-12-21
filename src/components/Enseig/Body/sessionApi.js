
import axios from "axios";

export async function getSession() {

        const response = await axios.get('http://localhost:5000/session/');
        console.log(response)
        return response
        
}
