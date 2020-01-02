import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// ROTEADOR
import routes from '../_core/routes'

// ELEMENTOS DO LAYOUT
import NavHeader from "../Component/estrutura/NavHeader/NavHeader"
import PreHeader from "../Component/estrutura/PreHeader/PreHeader";
import {Footer} from "../Component/estrutura/Footer";

// IMAGENS DOS TRATAMENTOS
import massagem1 from "../assets/image/exemplos/servicos/massagem1.jpg";
import massagem2 from "../assets/image/exemplos/servicos/massagem2.jpg";
import PacoteDeTerapias_I from "../assets/image/exemplos/servicos/PacoteDeTerapias_I.jpg";
import PacoteDeTerapias_II from "../assets/image/exemplos/servicos/PacoteDeTerapias_II.jpg";
import hidratacaoExclusiva from "../assets/image/exemplos/servicos/hidratacaoExclusiva.jpg";
import serv1 from "../assets/image/exemplos/servicos/serv1.jpg";
import infantil from "../assets/image/exemplos/servicos/infantil.jpg";
import corteDeUnhas from "../assets/image/exemplos/servicos/corteDeUnha.jpg";
import convencional from "../assets/image/exemplos/servicos/Convencional.jpg";
import ortese from "../assets/image/exemplos/servicos/Ortese.jpg";
import exclusivo from "../assets/image/exemplos/servicos/Exclusivo.jpg";
import unhaEncravada from "../assets/image/exemplos/servicos/UnhaEncravada.jpg";

// IMAGENS DOS PRODUTOS
import esfoliaDerm from "../assets/image/exemplos/produtos/esfoliaDerm.png";
import hydraDerm from "../assets/image/exemplos/produtos/hydraDerm.jpg";
import hydraM from "../assets/image/exemplos/produtos/hydraM.jpg";
import keraderm from "../assets/image/exemplos/produtos/keraderm.jpg";
import proGel from "../assets/image/exemplos/produtos/proGel.jpg";
import proPaste from "../assets/image/exemplos/produtos/proPaste.jpg";
import proSept from "../assets/image/exemplos/produtos/proSept.jpg";


export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            preloader : true
        }
    }

    tratamentos = (id = null) => {
        let trat = [
            {
                title: 'Massagem I',
                text: "Massagem manual relaxante, hidratação com cremes e vapor de ozônio.",
                valor: "67,00",
                img: massagem1,
                duracao: '01:40 Hs',
                id: '1'
            },
            {
                title: 'Massagem II',
                text: "Massagem manual relaxante, hidratação com cremes e vapor de ozônio",
                valor: "98,00",
                img: massagem2,
                duracao: '00:40 Hs',
                id: '2'
            },
            {
                title: 'Pacote de Terapias II',
                text: "Massagem manual relaxante com cremes e vapor de ozônio.",
                text2: "6 sessões de terapia",
                valor: "5000,00",
                img: PacoteDeTerapias_II,
                duracao: '00:40 Hs',
                id: '3'
            },
            {
                title: 'Hidratação Exclusiva',
                text: "Hidratação com esfoliação e cremes com vapor de ozônio",
                text2: "Indicado para: Pés ressecados com fissuras, calosidades e calos.",
                valor: "65,00",
                img: hidratacaoExclusiva,
                duracao: '00:40 Hs',
                id: '4'
            },
            {
                title: 'Corte de Unhas',
                text: "Antissepsia, corte e lixamento das unhas",
                valor: "50,00",
                img: corteDeUnhas,
                duracao: '00:40 Hs',
                id: '5'
            },
            {
                title: 'Convencional',
                text: "Diagnóstico, antissepsia e esfoliação, corte de unhas, desencravamento simples (sem inﬂamação/infecção).",
                text2: "Hidratação com cremes e massagem por vibroterapia. (massageador eletrônico)",
                valor: "85,00",
                img: convencional,
                duracao: '00:40 Hs',
                id: '6'
            },
            {
                title: 'Infantil',
                text: "Diagnóstico, antissepsia e esfoliação, corte de unhas, desencravamento simples (sem inﬂamação / infecção).",
                text2: "Hidratação com cremes e massagem por vibroterapia. (massageador eletrônico)",
                valor: "70,00",
                img: infantil,
                duracao: '00:40 Hs',
                id: '7'
            },
            {
                title: 'Órtese',
                text: "Antissepsia, remoção da onicofose/calo subungueal com 3 aplicações em 3 meses.",
                text2: "Dispositivo utilizado para correção da unha encravada com FMM (Fibra de Memória Molecular).",
                valor: "80,00",
                img: ortese,
                duracao: '00:40 Hs',
                id: '8'
            },
            {
                title: 'Exclusivo',
                text: "Diagnóstico, antissepsia e esfoliação, corte de unhas, desencravamento simples (sem inﬂamação / infecção).",
                text2: "Massagem manual relaxante, hidratação com cremes e vapor de ozônio.",
                valor: "105,00",
                img: exclusivo,
                duracao: '00:40 Hs',
                id: '9'
            },
            {
                title: 'Unha Encravada',
                text: "Diagnóstico, antissepsia, remoção da espícula, cauterização com alta frequência e 3 curativos com 2 retornos a cada 48horas. ",
                text2: "Retorno para curativos em diabéticos em 24 horas.",
                valor: "124,00",
                img: unhaEncravada,
                duracao: '00:40 Hs',
                id: '10'
            },
            {
                title: 'Cauterização e Curativos',
                text: "",
                img: serv1,
                duracao: '00:40 Hs',
                id: '11'
            },
            {
                title: 'Pacote de Terapias I',
                text: "Massagem manual relaxante com cremes e vapor de ozônio",
                text2: "6 sessões de terapia",
                img: PacoteDeTerapias_I,
                duracao: '00:40 Hs',
                id: '12'
            }
        ];

        if(id === null){
            return trat;
        }else{
            for (let i = 0; i < trat.length; i++) {

                if(trat[i].id === id){
                    return trat[i];
                }

            }
        }
    };

    produtos = (id = null) => {
        let prod = [
            {
                title: 'EsfoliaDerm',
                img: esfoliaDerm,
                id: '1'
            },
            {
                title: 'HydraDerm',
                img: hydraDerm,
                id: '2'
            },
            {
                title: 'Hydra M',
                img: hydraM,
                id: '3'
            },
            {
                title: 'KeraDerm',
                img: keraderm,
                id: '4'
            },
            {
                title: 'Pro-Gel',
                img: proGel,
                id: '5'
            },
            {
                title: 'Pro Paste',
                img: proPaste,
                id: '6'
            },
            {
                title: 'Pro-Sept',
                img: proSept,
                id: '7'
            }
        ];

        if(id === null){
            return prod;
        }else{
            for (let i = 0; i < prod.length; i++) {

                if(prod[i].id === id){
                    return prod[i];
                }

            }
        }
    };

    /**
     * Metodo de roteamento, é EXCLUSIVAMENTE atravéz desta função que as páginas serão executadas
     */
    SwitchRoutes = (
        <Switch>
            {routes.map((prop, key) => {

                if(prop.path === '/'){
                    return (
                        <Route
                            exact
                            path={prop.path + prop.params}
                            render={(props) => <prop.component  {...props} data={{
                                produtos : this.produtos,
                                tratamentos: this.tratamentos
                            }}/>}
                            key={key}
                        />
                    );
                }else{

                    return (
                        <Route
                            path={prop.path + prop.params}
                            render={(props) => <prop.component  {...props} data={{
                                produtos : this.produtos,
                                tratamentos: this.tratamentos
                            }}/>}
                            key={key}
                        />
                    );
                }

            })}
            <Redirect to="/" />
        </Switch>
    );

    render() {

        return (
            <>
                <PreHeader/>

                <NavHeader router={routes} />

                <div>{this.SwitchRoutes}</div>

                <Footer/>
            </>
        );
    }
}