import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CardDragon from '../../Components/CardDragon/CardDragon';

const FilterPage = () => {
  const { genero } = useParams(); // Obtiene el género desde la URL
  const [allCharacters, setAllCharacters] = useState([]); // Todos los personajes
  const [characters, setCharacters] = useState([]); // Personajes filtrados por página
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Función para obtener todos los personajes de la API
  const fetchAllCharacters = async () => {
    let url = 'https://dragonball-api.com/api/characters?limit=10';
    let allData = [];
    try {
      while (url) {
        const response = await fetch(url);
        const data = await response.json();
        allData = [...allData, ...data.items];
        url = data.links.next; // Obtiene el enlace a la siguiente página
      }
      setAllCharacters(allData); // Guarda todos los personajes
    } catch (error) {
      console.error('Error al obtener los personajes:', error);
    }
  };

  // Filtra los personajes por género y página
  useEffect(() => {
    const filteredCharacters = allCharacters.filter((character) => character.gender === genero);
    setTotalPages(Math.ceil(filteredCharacters.length / 10)); // Calcula el total de páginas
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    setCharacters(filteredCharacters.slice(startIndex, endIndex)); // Obtiene los personajes de la página actual
  }, [allCharacters, genero, currentPage]);

  // Carga inicial de todos los personajes o cuando cambia el género
  useEffect(() => {
    setCurrentPage(1); // Reinicia la página actual al cambiar el género
    fetchAllCharacters();
  }, [genero]);

  const handlePagination = (event, page) => {
    setCurrentPage(page); // Actualiza la página actual
  };

  return (
    <>
      <main>
        {characters.length > 0 ? (
          characters.map((user) => (
            <Link to={`/details/${user.name}/${user.id}`} key={user.id}>
              <CardDragon user={user} />
            </Link>
          ))
        ) : (
          <p>No se encontraron personajes para el género seleccionado.</p>
        )}
      </main>
      <div id="pagination">
      <Stack
          direction="row" 
     
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

export default FilterPage;