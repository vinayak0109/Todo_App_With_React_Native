import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		backgroundColor: '#96938f',
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginVertical: 10,
		borderRadius: 8,
		maxHeight: 100
	},
	title: {
		maxWidth: '85%',
		color: 'black',
		// fontWeight: 'bold',
	}
});

export default styles;