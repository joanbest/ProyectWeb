import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardDragon from "../../Components/CardDragon/CardDragon";
import "./DetailsPage.css";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Transformations from "../../Components/CardDragon/Transformations";

const DetailsPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams(); // Obtiene el ID del personaje desde la URL
  const navigate = useNavigate(); // Hook para manejar la navegación

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        console.log(data.transformations);
      })
      .catch((error) =>
        console.error("Error al obtener los detalles del personaje:", error)
      );
  }, [id]);

  if (!character) {
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>
    );
  }
  const mid = Math.ceil(character?.transformations?.length / 2);

  return (
    <>
      <div className="details-layout">
        <div className="side-transformations">
          {character.transformations
            .slice(0, Math.ceil(character.transformations.length / 2))
            .map((trans, index) => (
              <Transformations key={index} transformation={trans} />
            ))}
        </div>

        <div className="center-character">
          <CardDragon user={character} showDetails />
        </div>

        <div className="side-transformations">
          {character.transformations
            .slice(Math.ceil(character.transformations.length / 2))
            .map((trans, index) => (
              <Transformations key={index} transformation={trans} />
            ))}
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
