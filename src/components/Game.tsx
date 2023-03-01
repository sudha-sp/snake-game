import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useEffect, useState } from "react";
import Header from './Header'
import Score from './Score';
import { Coordinate, Direction } from '../types/types';
import { Colors } from '../styles/colors';
import Snake from './Snake';

const SNAKE_INITIAL_POSITION = [{x:5, y:5}];
const FOOD_INITIAL_POSITION = [{x:5, y:20}];
const GAME_BOUNDS = [{xMin: 0, xMax:35, yMin:0, yMax:63}];
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;

export default function Game(): JSX.Element {

  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
  const [food, setFood] = useState<Coordinate[]>(FOOD_INITIAL_POSITION);
  const [direction, setDirection] = useState<Direction>(Direction.Right);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    if(!isGameOver){
        const intervalId = setInterval(() => {
            !isPaused && moveSnake();
        }, MOVE_INTERVAL);
        return () => clearInterval(intervalId);
    }
  },[])

  const moveSnake = () => {
    const snakeHead = snake[0];
    const newHead = { ...snakeHead }
  }

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
        <View style={styles.boundaries}>
            <Snake snake={snake} />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
      },
      boundaries: {
        flex: 1,
        borderColor: Colors.primary,
        borderWidth: 12,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: Colors.background,
      },
})