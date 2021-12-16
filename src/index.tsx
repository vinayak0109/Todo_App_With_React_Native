import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo/AddTodo';
import ItemList from './components/ItemList/ItemList';
import { itemList } from './components/ItemList/ItemList.constants';
import { itemListType } from './components/ItemList/ItemList.types';
import styles from './index.styles';

const Todo = () => {
	const [data, setData] = useState<itemListType>(itemList);

	const addTodo = (newTodoText: string) => {
		const newTodo = {
			key: Math.random().toString(),
			title: newTodoText,
			isCompleted: false,
		};
		setData((prevState) => ([...prevState, newTodo]));
		Keyboard.dismiss();
	};

	const removeTodo = (currKey: string) => {
		setData((prevState) => prevState.filter(item => item.key !== currKey));
	};
	
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<AddTodo addTodo={addTodo} />
				<ItemList 
					itemList={data}
					removeTodo={removeTodo}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Todo;