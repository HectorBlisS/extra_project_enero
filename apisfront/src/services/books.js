import axios from 'axios'

//estas funciones se encargan de cada verbo!
let url = "http://localhost:3000/books"
//primer funcion 

// get all
export const getBooks = () => axios.get(url).then(res => res.data)

//subir un libro
export function postBook(book) {
    return axios.post(url, book)
        .then(res => res.data)
}
