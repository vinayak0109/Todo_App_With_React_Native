import React from 'react';
import { FlatList, View } from 'react-native';
import Item from '../Item/Item';
import styles from './ItemList.styles';
import { itemListType } from './ItemList.types';

type Props = {
	itemList: itemListType,
	removeTodo: (text: string) => void
}

const ItemList = ({itemList, removeTodo}: Props) => {
	return (
		<View style={styles.content}>
			<FlatList 
				data={itemList}
				renderItem={({ item }) => (<Item item={item} removeTodo={removeTodo} />)}
			/>
		</View>
	);
};

export default ItemList;