import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas } : Props) {
  // const [tarefas, setTarefas] = useState([{   // UseState é um rook, que serve para manipular o estado do component. Ele é uma método do react. Ele precisa que eu passe dois parÂmetros: o proprio estado (no caso, tarefas) e depois uma função com a qual eu vou manipular esse estado (no caso, setTarefa).
  //   tarefa: 'React',
  //   tempo: '02:00:00'
  // }, {
  //   tarefa: 'Javascript',
  //   tempo: '01:00:00'
  // }, {
  //   tarefa: "Typescript",
  //   tempo: "03:00:00"
  // }]);
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            selecionaTarefa = {selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;