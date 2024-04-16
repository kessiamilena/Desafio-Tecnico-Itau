
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";

import './style.css'
import PartQuadrinhos from "../../components/Quadrinhos/PartQuadrinhos";
import PartFilmes from "../../components/Filmes/PartFilmes";

function PerfilHeroi() {

    const { id } = useParams()

    const [heroi, setHeroi] = useState();

    useEffect(() => {
        api
          .get(
            `/characters/${id}?ts=1&apikey=2079dfd245a6153c52e405b45a4c22c1&hash=d2f6b9d08bc4f38f4e751f72b53c5db3`
          )
          .then((response) => {
            setHeroi(response.data.data.results[0]);
          })
          .catch((error) => console.log(error));
      }, [id]);

      console.log("Dados de heroi:", heroi, id);

    return(
        <>

        <main className="mainPerfil flex col">
            <a className="flex" href="/home">Voltar</a>
            <section className="flex col h-infos">
                {(heroi) ? (
                    <div className="flex perfil-heroi">
                    <div className="flex col">
                        <h2>{heroi.name}</h2>
                        <p>{heroi.description}</p>
                    </div>
                    <img
                        src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}
                        alt={`Imagem de ${heroi.name}`}
                    />
                    </div>
                ) : (
                        <div>Carregando herói...</div>
            )}
            </section>
            <section>
                <PartFilmes />
            </section>
            <section>
                <PartQuadrinhos />
            </section>
        </main>
        
        </>
    )
}

export default PerfilHeroi