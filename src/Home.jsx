import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    

    return (
    <div className="container-xl bg-cinza pt-4">
        
        <h1 className="text-start">Galeria de Músicas <span class="px-2 fs-3 bg-danger-subtle">Tema: Sertanejo</span></h1>   
         
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item" aria-current="page"><Link to="/destaque">Em Destaque</Link></li>
                <li className="breadcrumb-item" aria-current="page"><Link to="/registro">Registrar Vídeo</Link></li>
            </ol>
        </nav>
        <h4 className="fw-bold pb-0 mb-0">Todos os Vídeos</h4>
        <div class="container text-center">
            <div class="row row-cols-3">
                <div class="col">
                    <div class="bg-danger ratio ratio-4x3">
                        <div>1x1</div>
                    </div>
                </div>
                <div class="col">
                    <div class="ratio ratio-4x3">
                        <div>1x1</div>
                    </div>
                </div>
                <div class="col">
                    <div class="ratio ratio-4x3">
                        <div>1x1</div>
                    </div>
                </div>
                <div class="col">
                    <div class="ratio ratio-4x3">
                        <div>1x1</div>
                    </div>
                </div>

            </div>
        </div>

            
        
    </div>
    );
}