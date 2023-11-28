import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Destaque() {
    return(
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
            <div class="row row-cols-2">
                <div class="col my-2">
                    <div class="bg-danger ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                    </div>
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">Legenda</button>
                    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                            I will not close if you click outside of me.
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col my-2">
                    <div class="bg-danger ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col my-2">
                    <div class="bg-danger ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col my-2">
                    <div class="bg-danger ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                    </div>
                </div>

            </div>

        </div>

            
        
    </div>
    );
}