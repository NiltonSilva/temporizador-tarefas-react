import style from './Relogio.module.scss';

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo  = 0}: Props) {
    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return (
        <>  
            {/* dentro do arquivo do react, essa parte de html precisa estar dentro de um container pai. Nao posso ter varios elementos no mesmo nivel hierarquico. Esse abre e fecha tags é uma forma de o react permitir inserir as coisas sem ter um elemento pai (div, aside ou equivalentes). Isso não será renderizado no meu DOM real. Eu tambem poderia colocar meu código html dentro de <React.Fragment> ... </React.Fragment> */}
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}