import { useEffect } from "react"
import api from "../../utils/api"

import Lupa from '../../assets/img/lupa.svg'

import '../../pages/Home/style.css'

function BuscaHerois() {

    useEffect(() => {
        api.get('/characters?ts=1&apikey=2079dfd245a6153c52e405b45a4c22c1&hash=d2f6b9d08bc4f38f4e751f72b53c5db3')
        .then( (response) => {
            console.log(response.data)
        })
        .catch((error) => console.log(error))
    }, [])

    return(
        <section className="busca">
            <form method="GET">
                <input 
                type="text"
                id="busca-heroi"
                placeholder="Busca pelo nome" />
                <button><img src={Lupa} alt="icone de busca" /></button>
            </form>
        </section>
    )
}

export default BuscaHerois