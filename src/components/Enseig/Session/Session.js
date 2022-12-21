import axios from 'axios';

export async function addSession() {
    const response = await axios.post("localhost:5000/session/addSession");
    return response;
  }