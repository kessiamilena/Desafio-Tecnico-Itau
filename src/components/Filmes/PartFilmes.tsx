import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";

import MovieIcon from "../../assets/img/movie.svg"
import './style.css'

function PartFilmes() {

    const { id } = useParams()

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        api
          .get(
            `/characters/${id}/stories?ts=1&apikey=2079dfd245a6153c52e405b45a4c22c1&hash=d2f6b9d08bc4f38f4e751f72b53c5db3`
          )
          .then((response) => {
            setFilmes(response.data.data.results);
          })
          .catch((error) => console.log(error));
      }, [id]);

      console.log("Dados de heroi:", filmes, id);

    return(
        <div>
            <div className="flex part">
                <h2>Participação em filmes</h2>
                <img src={MovieIcon} alt="icone de participação em filmes" />
            </div>
            <section className="lista-fq flex col">
                {filmes.map((filme) => (
                    <div className="fq flex col" key={filme.id}>
                        <h3>{filme.title}</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    </div>
            ))}
            </section>
        </div>
    )
}

export default PartFilmes