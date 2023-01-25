import style from './Relogio.module.scss';

export default function Relogio () {
    return (
        <>  
            {/* dentro do arquivo do react, essa parte de html precisa estar dentro de um container pai. Nao posso ter varios elementos no mesmo nivel hierarquico. Esse abre e fecha tags é uma forma de o react permitir inserir as coisas sem ter um elemento pai (div, aside ou equivalentes). Isso não será renderizado no meu DOM real. Eu tambem poderia colocar meu código html dentro de <React.Fragment> ... </React.Fragment> */}
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </>
    )
}