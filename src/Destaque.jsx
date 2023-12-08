import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from './Card';
import Header from "./Header";

export default function Destaque() {
    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));
    let produto = lista.slice(-4);
    let titulo = "Músicas Destaques";

    return(
    <div className="container-xl bg-cinza pt-4">
        
        <Header titulo={titulo}/>
        <h4 className="fw-bold pb-0 mb-0">Videos em Destaque</h4>
        <div className="container">                
            <div className="row">
                <Card listaVideos={produto} />
            </div>    
        </div>

            
        
    </div>
    );
}