import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Registro() {
    return(
    <div className="container-xl bg-cinza pt-4">
        
        <h1 className="text-start">Registrar Música <span class="px-2 fs-4 fw-normal  bg-danger-subtle">Tema: Sertanejo e Pagode</span></h1>  
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/destaque">Em Destaque</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Registrar Video</li>
            </ol>
        </nav>
        <hr />
        <div className="container-xl">
            <div className="mx-auto largura-50 pb-5">
                <h4 className="py-3 fw-normal text-center">Preencha as informações abaixo para enviar o video</h4>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nome da Música" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label mx-3">Categoria:</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Sertanejo</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Pagode</label>
                    </div>
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Autor/Canal da Música" />
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Descrição sobre a música" />
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="URL" />
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Legenda (se houver)" />
                </div>
                <div className="text-center">
                    <button className="btn btn-success">Enviar Vídeo</button>
                </div>
            </div>
        </div>
   
        
    </div>
    );
}