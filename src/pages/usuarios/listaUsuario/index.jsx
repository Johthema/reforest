import Header from '../../../components/header/index'
import { useState, useEffect } from 'react'
import Style from './listauser.module.css'
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrashAlt, FaSearch, FaFilter, FaRedoAlt, FaRecycle } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';



const URL_API = "http://192.168.0.249:3001/api/user";


export default function ListarUsuario() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null)

  //variáveis de filtros
  const [initialRepos, setInitialRepo] = useState([])
  const [repos, setRepo] = useState([])

  //variaveis do modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //-----------------------------------------------------------------------Inicio Função de filtros
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(URL_API)
        const dados = await response.json();
        setInitialRepo(dados);
        setRepo(dados);

      } catch (error) {
        console.log(error)
      }
    }
    fetchRepos()
  }, []);

  const handleChange = ({ target }) => {
    if (!target.value) {
      setRepo(initialRepos)
      return;
    }

    const filterRepos = repos.filter(({ name }) => name.includes(target.value));
    setRepo(filterRepos)
  }
  //----------------------------------------------------------------------------Fim Função de filtros

  //Primeiro carregamengto para saber se esta tudo certo
  const fecthAllData = async () => {
    try {

      setLoading(true)
      const response = await fetch(URL_API) //por padrão o fetch ja utiliza o GET
      const data = await response.json()

      if (!data)
        throw 'problema na requisição' //Aqui será tratado o erro de requisição. Porém é melhor tratar pelo status(200, 400, 500)
      setData(data)

      //Iniciando a estrutura da requisição

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }

  //useEffect Lida com o ciclo de vida da aplicação para não ficar em loop infinito
  useEffect(() => {
    fecthAllData();

  }, []);



  return (
    <div>
      <Header></Header>

      {/* Primeiro carregamento será o loadingo para saber se existe algo em data */}

      <div className={Style.divFundo}>


        <Navbar className={Style.headerTabela}>
          <Container>
            <InputGroup className={Style.Busca}>
              <Form.Control
                placeholder="Buscar"
                aria-label="Buscar por nome"
                aria-describedby="basic-addon2"
                onChange={handleChange}
              />
              {/* <Button variant="outline-secondary" id="button-addon2">
                            <FaSearch/>
                          </Button> */}
            </InputGroup>
            {/* <Navbar.Brand href="#home">Filtros</Navbar.Brand>  */}
            <Dropdown className={Style.DropMENU}>
              <Dropdown.Toggle className={Style.IconeMENU}>
                <Nav.Link href="#deets"  ><FaFilter className={Style.Icon} />Filtro</Nav.Link>
              </Dropdown.Toggle>

              <Dropdown.Menu className={Style.OpDropNotifi}>
                <Dropdown.Item href="#/action-1" >Data de criação</Dropdown.Item>
                <Dropdown.Item href="#/action-2" >Ordem alfabética</Dropdown.Item>
                <Dropdown.Item href="#/action-3" >Tipo</Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>
          </Container>
        </Navbar>

        <Table striped bordered hover className={Style.Tabela}>
          <thead>
            <tr>

              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>papel</th>
              <th></th>
              <th></th>
            </tr>

          </thead>

          <tbody>

            {repos.map((repo) => (

              <tr>
                <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.name}</h2></td>
                <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.fullname}</h2></td>
                <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.email}</h2></td>
                <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.phone}</h2></td>
                <td><h2 key={repo._id} className={Style.FontUsuario}> {repo.createAt}</h2></td>
                <td className={Style.Editar}><FaEdit className={Style.icoEditar} /></td>
                <td className={Style.Deletar} onClick={handleShow}><FaTrashAlt className={Style.icoDeletar} /></td>
              </tr>

            ))}

            {/* {data && data.map((item) => (
                                <tr>

                                  

                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.name}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.fullname}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.email}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.phone}</h2></td>
                                    <td><h2 key={item._id} className={Style.FontUsuario}> {item.createAt}</h2></td>
                                    <td className={Style.Editar}><FaEdit className={Style.icoEditar}/></td>
                                    <td className={Style.Deletar}><FaTrashAlt className={Style.icoDeletar}/></td>
                                </tr>
                            ))} */}


          </tbody>
        </Table>

      </div>

      {loading && !data &&
        <Alert key="1231" variant="primary" className={Style.botaoCarregamento}>
          <Spinner animation="border" variant="primary" /> Carregando informações..
        </Alert>
      }


      {/* Modal de exclusão de usuario */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <h2 className={Style.tituloDeletar}>Deletar usuário!</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h4><FaRedoAlt /> Por conveniência, poderá restaura-lo mais tarde. </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>


    </div>





  )

}