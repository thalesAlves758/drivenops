import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function fetchRandomStudent() {
      const API_URL = process.env.REACT_APP_BASE_URL;
      try {
        const response = await axios.get(`${API_URL}/students/random`);
        const student = response.data;
        if (!student) {
          alert('Xablau! Não há estudantes cadastrados para o sorteio!');
        } else {
          setStudent(student);
        }
      } catch (error) {
        alert('Não foi possível realizar o sorteio!');
      }
    }
    fetchRandomStudent();
  }, []);

  return <>
    {student ? <h1>{student.name}</h1> : 'Carregando...'}
    <Link to={'/students'}>listar estudantes</Link>
  </>;
}

export default Home;
