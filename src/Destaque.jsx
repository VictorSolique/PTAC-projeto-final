import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from './Card';

export default function Destaque() {
    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));
    let produto = lista.slice(-4);

    return(
    <div className="container-xl bg-cinza pt-4">
        
        <h1 className="text-start">Músicas Destaques <span className="px-2 fs-4 fw-normal  bg-danger-subtle">Tema: Sertanejo e Pagode</span></h1>   
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Em Destaque</li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/registro">Registrar Vídeo</Link></li>
            </ol>
        </nav>
        <h4 className="fw-bold pb-0 mb-0">Todos os Vídeos</h4>
        <div className="container">                
            <div className="row">
                <Card listaVideos={produto} />
            </div>    
        </div>

            
        
    </div>
    );
}