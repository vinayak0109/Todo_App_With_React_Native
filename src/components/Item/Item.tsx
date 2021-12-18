import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

	const onDeleteHandler = (key: string): void => {
		Alert.alert('Confirmation!', 'Are you sure you want to delete?',[
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel')
			},
			{
				text: 'Ok',
				onPress: () => removeTodo(key)
			}
		]);
	};

	return (
		<TouchableOpacity onPress={() => onPressHandler(item)}>
			<View style={styles.item}>
				<Text style={styles.title} numberOfLines={4}>{item.title}</Text>
				<Icon
					name="trash" 
					size={25}
					color='black'
					onPress={() => onDeleteHandler(item.key)}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default Item;