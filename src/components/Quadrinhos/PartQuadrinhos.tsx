import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";

import Quadrinho from "../../assets/img/quadrinho.svg"
function PartQuadrinhos() {

    const { id } = useParams()

    const [quadrinhos, seQuadrinhos] = useState([]);

    useEffect(() => {
        api
          .get(
            `/characters/${id}/comics?ts=1&apikey=2079dfd245a6153c52e405b45a4c22c1&hash=d2f6b9d08bc4f38f4e751f72b53c5db3`
          )
          .then((response) => {
            seQuadrinhos(response.data.data.results);
          })
          .catch((error) => console.log(error));
      }, [id]);

      console.log("Dados de heroi:", quadrinhos, id);

    return(
        <div>
            <div className="flex part">
                <h2>Participação em quadrinhos</h2>
                <img src={Quadrinho} alt="icone de participação em quadrinhos" />
            </div>
            <section className="lista-fq flex col">
                {quadrinhos.map((quadrinho) => (
                    <div className="fq flex col cn" key={quadrinho.id}>
                        <img
                        src={`${quadrinho.thumbnail.path}.${quadrinho.thumbnail.extension}`}
                        alt={`Imagem do quadrinho ${quadrinho.title}`}
                        />
                        <div>
                            <h3>{quadrinho.title}</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        </div>
                    </div>
            
            ))}
            </section>
        </div>
    )
}

export default PartQuadrinhos