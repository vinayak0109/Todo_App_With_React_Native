import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import styles from './Item.styles';
import { itemType } from './Item.types';

type Props = {
	item: itemType,
	removeTodo: (text: string) => void
}

const Item = ({item, removeTodo}: Props) => {
	const onPressHandler = (item: itemType): void => {
		console.log(item.title);
	};

	return (
		<TouchableOpacity onPress={() => onPressHandler(item)}>
			<View style={styles.item}>
				<Text style={styles.title}>{item.title}</Text>
				<Button
					title='R'
					color='black'
					onPress={() => removeTodo(item.key)}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default Item;