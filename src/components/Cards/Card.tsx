import { useNavigate } from 'react-router-dom'
import './style.css'

function Card ({ data }) {

    const navigate = useNavigate()

    return (
        <>
        {
            (data) ? (
                data.map(heroi => {
                    return (
                        <div className="card" key={heroi.id} onClick={() => navigate(`/perfil/${heroi.id}`)}>
                            <div className="nome">
                                <h3>{heroi.name}</h3>
                            </div>
                            <img src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`} alt={`Imagem de ${heroi.name}.`} />
                        </div>
                    )
                })
            ): ""
        }
        
        </>
    )
}


export default Card