import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../styles/colors';
import { Coordinate } from '../types/types';

interface SnakeProps {
    snake: Coordinate[];
}

export default function Snake({snake}:SnakeProps):JSX.Element {
  return (
    <>
        {snake.map((segment: any, index: number) => {
            const segmentStyle = {
                left: segment.x * 10,
                right: segment.y * 10,
            };
            return <View key={index} style={[styles.snake, segmentStyle]}></View>
        })}
    </>
  )
}

const styles = StyleSheet.create({
    snake: {
      width: 15,
      height: 15,
      borderRadius: 7,
      backgroundColor: Colors.primary,
      position: "absolute",
    },
  });