import axios from "axios";


const todoslosusuarios= async (state)=> {
    const peticion = await axios.get("http://localhost:8080/api/usuario");
    state(peticion.data);
 
}

export { todoslosusuarios}