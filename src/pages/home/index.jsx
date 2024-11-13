import { useEffect } from 'react'
import './style.css'
import Trash from '../../assets/trash1.svg'
import api from '../../services/api'

function Home() {

  let users = []

  async function getUsers() {
    users = await api.get('/usuarios')
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div className='container'>
        <form action="">
          <h1>Cadastro de Usuário</h1>
          <input placeholder="Insira o Nome" name="Name" type='text' />
          <input placeholder="Informe a Idade" name="Ages" type='number' />
          <input placeholder="Insira o E-mail" name="E-mail" type='email' />
          <button type='button'>Cadastrar</button>
        </form>

        {users.map(user => (

          <div key={user.id} className="card">
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>E-mail: <span>{user.email}</span></p>
            </div>
            <button>
              <img src={Trash} />
            </button>
          </div>
        ))}
        <div>

        </div>

      </div>
    </>
  )
}

export default Home
