import { useEffect, useState } from "react"
import BuscaHerois from "../../components/Busca/BuscaHerois"
import api from "../../utils/api"
import Card from "../../components/Cards/Card"

import './style.css'

function Home() {

    const [heroi, setHeroi] = useState([]);


    useEffect(() => {
        api.get('/characters?ts=1&apikey=2079dfd245a6153c52e405b45a4c22c1&hash=d2f6b9d08bc4f38f4e751f72b53c5db3')
        .then( (response) => {
            setHeroi(response.data.data.results)    
            console.log(response.data)
        })
        .catch((error) => console.log(error))
    }, [])



    return(
        <>
        <header>
        </header>
        <main className="main-home">
            <BuscaHerois />
            <div className="cards">
                {
                    (!heroi)?
                        <span>Nenhum(a) herói(na) foi encontrado.</span>
                    : <Card data={heroi}/>
                }
            </div>
        </main>
        </>
    )
}

export default Home