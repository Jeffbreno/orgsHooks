import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const gerarNuneroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNuneroAleatorio(1, 500)}m`,
            estrelas: gerarNuneroAleatorio(1, 5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNuneroAleatorio(1, 500)}m`,
            estrelas: gerarNuneroAleatorio(1, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `${gerarNuneroAleatorio(1, 500)}m`,
            estrelas: gerarNuneroAleatorio(1, 5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${gerarNuneroAleatorio(1, 500)}m`,
            estrelas: gerarNuneroAleatorio(1, 5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${gerarNuneroAleatorio(1, 500)}m`,
            estrelas: gerarNuneroAleatorio(1, 5),
        }
    ]
}