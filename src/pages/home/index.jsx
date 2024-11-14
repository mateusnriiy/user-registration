import { useState } from 'react';
import './style.css'

function verificarInputs() {
  
  const inputs = document.querySelectorAll("input");
  const todosPreenchidos = Array.from(inputs).every(input => input.value.trim() !== "");

  if (todosPreenchidos) {
      inputs.forEach(input => input.value = "");
      alert("Registration completed Successfully");
  } else {
      alert("Please, fill in all fields.");
  }
}

function Home() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend
    console.log({ name, age, email });
  };
  
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1>Cadastro de Usuário</h1>
          <input type='text' placeholder="Insira o Nome" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type='number' placeholder="Informe a Idade" value={age} onChange={(e) => setAge(e.target.value)}/>
          <input type='email' placeholder="Insira o E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button onClick={verificarInputs}>Cadastrar</button>
        </form>
      </div>
    </>
  )
}

export default Home;
