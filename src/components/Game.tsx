import { View, Text, SafeAreaView } from 'react-native'
import { useEffect, useState } from "react";
import Header from './Header'
import Score from './Score';

const Game = () => {

  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

    const reloadGame = () => {}
    const pauseGame = () => {}
  return (
    <SafeAreaView>
        <Header
          reloadGame={reloadGame}
          pauseGame={pauseGame}
          isPaused={isPaused}
        >
          <Score score={score} />
        </Header>
    </SafeAreaView>
  )
}

export default Game