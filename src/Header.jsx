import { Link } from "react-router-dom"

export default function Header({titulo}) {
    return (
        <div>
            <h1 className="text-start">{titulo} <span className="px-2 fs-4 fw-normal  bg-danger-subtle">Tema: Sertanejo, Pagode e MPB</span></h1>  
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to="/destaque">Em Destaque</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to="/registro">Registrar Vídeo</Link></li>
                </ol>
            </nav>
            <hr />
        </div>
    )
}