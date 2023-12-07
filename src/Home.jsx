import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer"

export default function Home() {
    const lista = JSON.parse( localStorage.getItem("Lista"));

    return (
    <div className="container-xl bg-cinza pt-4">
        
        <h1 className="text-start">Galeria de Músicas <span className="px-2 fs-4 fw-normal bg-danger-subtle">Tema: Sertanejo e Pagode</span></h1>    
         
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item" aria-current="page"><Link to="/destaque">Em Destaque</Link></li>
                <li className="breadcrumb-item" aria-current="page"><Link to="/registro">Registrar Vídeo</Link></li>
            </ol>
        </nav>
        <h4 className="fw-bold pb-0 mb-0">Todos os Vídeos</h4>
        <div className="container text-center">
            <div className="row">
                {lista.map((item) => (
                    <div className="col-sm-4 my-2">
                        <div className="bg-danger ratio ratio-16x9">
                            <iframe src={"https://www.youtube.com/embed/" + item.url.slice(17)} title="YouTube video" allowfullscreen></iframe>
                        </div>
                        <h4 className="fw-normal py-0 mb-0">{item.nome}</h4>
                    </div>
                ))}                
            </div>
        </div>

            
        <Footer />
    </div>
    );
}