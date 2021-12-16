import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from './AddTodo.styles';

type Props = {
	addTodo: (text: string) => void
}

const AddTodo = ({addTodo}: Props) => {
	const [text, setText] = useState('');

	const handleChange = (value: string) => {
		setText(value);
	};

	const handleAddTodo = (text: string) => {
		setText('');
		addTodo(text);
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder='Add new todo...'
				onChangeText={handleChange}
				value={text}
			/>
			<Button
				title='Add Todo'
				color='black'
				onPress={() => handleAddTodo(text)}
			/>
		</View>
	);
};

export default AddTodo;