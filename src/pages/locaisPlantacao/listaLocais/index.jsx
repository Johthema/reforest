import Header from '../../../components/header/index';
import Arvores from '../../../components/cards/cardArvore/index';
import Style from './listalocais.module.css';
import {useState, useEffect} from 'react';



export default function ListarLocal(){
    const URL_API = process.env.NEXT_PUBLIC_API_URL+"plantingPlace";

    const [reloadCount, setReloadCount] = useState(0);
    const [dataCat, setData] = useState([]);
    const [name, setNome] = useState('');
  //Primeiro carregamengto para saber se esta tudo certo
  const fecthAllData = async () => {
    try {

      //setLoading(true)
      const response = await fetch(URL_API) //por padrão o fetch ja utiliza o GET
      const dataCat = await response.json()

      if (!dataCat)
        throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
      setData(dataCat)

      setNome(dataCat.name)
      console.log("Lista de locais: ",dataCat)
      //Iniciando a estrutura da requisição

    } catch (error) {
      console.log(error)
    } finally {
    //   setLoading(false)
    }

  }

  useEffect(() => {
    fecthAllData();

  }, [reloadCount]);


    return(
        <div>
            <Header></Header>
            <h1>
                Lista de locais de plantação em atividade
            </h1>
           <div>

           </div>

        </div>
    )
}