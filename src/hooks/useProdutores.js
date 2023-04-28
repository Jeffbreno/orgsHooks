import {useState, useEffect} from 'react';

import {carregaProdutores} from '../services/carregaDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    retorno.lista.sort((a, b) => {
      const nameA = a.nome.toUpperCase();
      const nameB = b.nome.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return [titulo, lista];
}
