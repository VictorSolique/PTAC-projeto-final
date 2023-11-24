import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Registro() {
    return(
    <div className="container-xl bg-cinza pt-4">
        
        <h1 className="text-start">Registros de Música <span class="px-2 fs-3 bg-danger-subtle">Tema: Sertanejo</span></h1>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/destaque">Em Destaque</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Registrar Video</li>
            </ol>
        </nav>
        <h4 className="fw-bold pb-0 mb-0">Todos os Vídeos</h4>
        <div class="container text-center">
            <div class="row row-cols-2">
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