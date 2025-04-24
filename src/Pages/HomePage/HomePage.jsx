import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import CardDragon from '../../Components/CardDragon/CardDragon';
import './HomePage.css'; 

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationLinks, setPaginationLinks] = useState({});

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.items);
        setTotalPages(data.meta.totalPages);
        setPaginationLinks(data.links); // Guarda los enlaces de paginación
      })
      .catch((error) => console.error('Error al obtener los personajes:', error));
  };

  useEffect(() => {
    // Carga inicial de la primera página
    fetchCharacters('https://dragonball-api.com/api/characters?limit=10');
  }, []);

  const handlePagination = (event, page) => {
    setCurrentPage(page); // Actualiza la página actual
    if (paginationLinks.next && page > currentPage) {
      fetchCharacters(paginationLinks.next); // Carga la página siguiente
    } else if (paginationLinks.previous && page < currentPage) {
      fetchCharacters(paginationLinks.previous); // Carga la página anterior
    }
  };

  return (
    <>
      <main>
        {characters.map((user) => (
          <Link to={`/details/${user.name}/${user.id}`} key={user.id}>
            <CardDragon user={user} />
          </Link>
        ))}
      </main>
      <div id="pagination">
        <Stack
          direction="row" // Configura la dirección como fila
     
          sx={{
            margin: '20px auto',
            justifyContent: 'center', 
            alignItems: 'center', 
            overflowX: 'auto', 
          }}
        >
          <Pagination
            onChange={handlePagination}
            count={totalPages}
            page={currentPage}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </>
  );
};

export default HomePage;