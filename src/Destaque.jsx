import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Destaque() {
    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));
    const produto = lista.filter((objeto) => {
        if(lista.id <= 4) return objeto;
        else return null;
    })

    return (
    <div className="container-xl bg-cinza pt-4">
        
        <h1 className="text-start">Músicas Destaques <span class="px-2 fs-4 fw-normal  bg-danger-subtle">Tema: Sertanejo e Pagode</span></h1>   
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Em Destaque</li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/registro">Registrar Vídeo</Link></li>
            </ol>
        </nav>
        <h4 className="fw-bold pb-0 mb-0">Todos os Vídeos</h4>
        <div class="container">
            <div class="row">
                

            {lista.map((item) => (
                <div class="col-sm-4 my-2">
                    <div class="bg-danger ratio ratio-16x9">
                        <iframe src={"https://www.youtube.com/embed/" + item.url.slice(17)} title="YouTube video" allowfullscreen></iframe>
                    </div>
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">Legenda</button>
                    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                                <h2>Nome da Música</h2>
                                <p><span>Autor/Canal:</span> Autor</p>
                                <p><span>Categoria:</span> Sertanejo</p>
                                <p><span>Descrição:</span> Descrição sobre a música</p>
                                <p><span>URL:</span> URL</p>
                                <p><span>Legenda:</span> Legenda se houver</p>
                                
                            </div>
                        </div>
                    </div>

                </div>
                ))}
                

            </div>

        </div>

            
        
    </div>
    );
}