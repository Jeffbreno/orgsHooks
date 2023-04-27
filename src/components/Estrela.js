import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import estrelaTrue from '../assets/estrela.png';
import estrelaFalse from '../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  statusEstrela = true,
  preenchida,
  grande = false,
}) {
  const estilos = estilosFuncao(grande);

  const getImage = () => {
    if (preenchida) {
      return estrelaTrue;
    }
    return estrelaFalse;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={statusEstrela}>
      <Image source={getImage()} style={estilos.estrela} />
    </TouchableOpacity>
  );
}

const estilosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
