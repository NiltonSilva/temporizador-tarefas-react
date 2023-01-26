import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefas';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);   // UseState é um rook, que serve para manipular o estado do component. Ele é uma método do react. Ele precisa que eu passe dois parÂmetros: o proprio estado (no caso, tarefas) e depois uma função com a qual eu vou manipular esse estado (no caso, setTarefa).
  const [selecionado, setSelecionado] = useState<ITarefa>();
  
  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas = {setTarefas} />
      <Lista 
        tarefas = {tarefas}
        selecionaTarefa = {selecionaTarefa}
      />
      <Cronometro />
    </div>
  );
}

export default App;
