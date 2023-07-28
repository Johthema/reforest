
//import Home from '../pages/home/index'
//import './globals.css'
import Header from '../../components/header/index';
import Footer from '../../components/footer/index'
import React from 'react'
import Cards from '../../components/cards/cardHome/index'
import Style from './home.module.css'
import Image from 'next/image';
import Logotipo from '../../assets/images/plantar1.png';
import Doar from '../../assets/images/presente4.png';
//import Doar from '../../assets/images/presente2.png';
//import Fundotipo from '../../assets/images/fundo_floresta.png';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { FaTree, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';


export default function Home() {
  return (
 
<div >

<Header />

<Carousel data-bs-theme="dark" className={Style.DivIndice}>
      <Carousel.Item>
      {/* <Image src={FlorestaImghoje} className={Style.floresImgHoje} alt="" /> */}
      <div className={Style.DivInternoTitutlos}>
      <h2 className={Style.tituloH2}>Árvores plantadas hoje</h2>
      <h2 className={Style.subtituloH2}>8.453</h2>
      </div>
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <div className={Style.DivInternoTitutlos}>
      <h2 className={Style.tituloH2}>Árvores plantadas este mês</h2>
      <h2 className={Style.subtituloH2}>40.453</h2>
      </div>
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <div className={Style.DivInternoTitutlos}>
      <h2 className={Style.tituloH2}>Árvores plantadas este ano</h2>
      <h2 className={Style.subtituloH2}>1.245,552</h2>
      </div>
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>



<div className={Style.DivTitulos}>


 
 
   
</div>
<section className={Style.Sessao1}>
  <div className={Style.DivPlantarArvoreEsquerdo}>
    <div className={Style.TextoArvoreEsquerdo}>
    <h1 className={Style.TituloArvore}>Plante uma árvore</h1>
    <p className={Style.TextoArvore}>
    Juntos, podemos cultivar um ambiente mais saudável para as próximas gerações. 
    Plante uma árvore e seja parte da mudança positiva que nosso planeta precisa!"
    </p>
    <h4 className={Style.subTituloArvore}>Faça a diferença hoje! Plante uma árvore e deixe sua marca no mundo. Contribua para um futuro mais verde e sustentável.</h4>
    
    <Button variant="success" className={Style.Botao}>Plantar</Button>
    </div>
  </div>
  <div >
    
    <Image src={Logotipo} className={Style.logo} alt="" />
    
  
  </div>
</section >
<section className={Style.Sessao2}>
<div className={Style.DivPlantarArvoreEsquerdo}>
    <div >
    <Image src={Doar} className={Style.logo} alt="" />
    </div>
  
  </div>
  <div className={Style.DivPlantarArvoreDireito}>
    <div className={Style.TextoArvoreDireito}>
    <h1 className={Style.TituloArvore2}>Plante amor e sustentabilidade no coração de alguém!</h1>
    <p className={Style.TextoArvore2}>
    Transmita seu carinho através da natureza, cultivando um futuro mais verde juntos.
    Surpreenda com um presente que perdura por gerações, renovando esperanças e deixando um legado para o mundo.
    </p>
    <h4 className={Style.subTituloArvore2}>presenteie uma árvore! Um gesto eco-friendly que floresce vida e conecta almas.</h4>
    <Button variant="success" className={Style.Botao}>Oferecer</Button>
    </div>
  </div>
 
</section >
<section className={Style.Sessao3}>

 
<div className={Style.MainContainer}>

<div className={Style.ParallaxContainer}>
<h1 className={Style.TituloArvore3}>Minha Floresta</h1>
<div className={Style.ContainerTextoFloresta}>
    <h4 className={Style.subTituloArvore3}>Adentre um mundo mágico e único.</h4>
    <p className={Style.TextoArvore3}>
    Um santuário de biodiversidade, fruto do amor e dedicação de ações sustentáveis.
    </p>
    <Button variant="success">Explorar</Button>
    </div>
    
</div>


</div>
 
</section >
<section className={Style.Sessao4}>
  
  <h1>Categorias</h1>
 
<div className={Style.DivSessao4}>


  <div  className={Style.Catego}>
    <FaTree className={Style.CategoIco1}/>
  </div>
  <div  className={Style.Catego}>
    <FaMapMarkedAlt className={Style.CategoIco2}/>
  </div>
  <div  className={Style.Catego}>
    <FaUsers className={Style.CategoIco3}/>
  </div>

  </div>
</section>

<Cards></Cards>
<Footer/>

</div>
)
  
}



// export default function Home (){
//     return(
//         <div>
//         <Header></Header>
//         <h1>Página Início aqui </h1>
//         <Cards></Cards>
//         </div>
//     )
       
    
// }