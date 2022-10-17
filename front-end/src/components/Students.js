import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    async function fetchStudents() {
      const API_URL = process.env.REACT_APP_BASE_URL;
      try {
        const response = await axios.get(`${API_URL}/students`);

        const students = response.data;

        if (students.length === 0) {
          alert('Xablau! Não há estudantes cadastrados!');
        } else {
          setStudents(students);
        }
      } catch (error) {
        alert('Não foi possível recuperar os estudantes');
      }
    }
    fetchStudents();
  }, []);

  return <>
    {students ? <>{students.map((student, index) => <h1 key={index}>{student.name}</h1>)}</> : 'Carregando...'}
    <Link to={'/'}>Pegar estudante aleatório</Link>
  </>;
}

export default Home;
