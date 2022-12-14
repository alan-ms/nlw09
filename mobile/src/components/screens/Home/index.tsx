import { View, Image, FlatList } from 'react-native';
import logoImg from '../../../assets/logo-nlw-esports.png';

import { Heading } from '../../Heading';
import { GameCard } from '../../GameCard';
import { styles } from './styles';
import { GAMES } from '../../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}/>
      <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...'/>
      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerList}
        renderItem={({item}) => (
          <GameCard
            data={item}
          />
        )}
      />
    </View>
  );
}