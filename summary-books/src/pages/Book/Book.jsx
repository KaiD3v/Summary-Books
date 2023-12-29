import { useEffect } from "react"
import styles from "./Book.module.css"
import { useParams } from "react-router-dom"
import api from "../../axios/config"
import { useState } from "react"

const Book = () => {
    const {id} = useParams()
    const [bookDetails, setBookDetails] = useState(null)

    useEffect(() => {
        const fetchBookDetails = async () => {
          try {
            
            if (id) {
              const response = await api.get(`/books/${id}`);
              setBookDetails(response.data);
            }
          } catch (err) {
            console.error(`Erro ao buscar detalhes do livro: ${err}`);
          }
        };
    
        fetchBookDetails();
      }, [id]);

    if(!bookDetails){
        return <p>Detalhes Indisponíveis...</p>
    }
 
    return (
    <div className={styles.book_container}>
    <h1>{bookDetails.title}</h1>
    <span><b>Autor:</b> {bookDetails.author}</span>
    <p>{bookDetails.summary}</p>
    
    </div>
  )
}

export default Book