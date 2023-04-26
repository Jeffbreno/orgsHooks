import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={estilos.informacoes}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text>{distancia}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome:{
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold'
  },
  distancia:{
    
  }
});
