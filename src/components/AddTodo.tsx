import { FormEvent, useState } from "react";

import { useDispatch } from "react-redux";
import { add } from "../store";

const AddTodo = () => {
	const [newTodo, setNewTodo] = useState("");
	const dispatch = useDispatch();

	const handleNewTodo = (e: FormEvent) => {
		e.preventDefault();

		dispatch(
			add({
				newTodo,
			})
		);

		setNewTodo("");
	};

	return (
		<form onSubmit={handleNewTodo}>
			<input
				type="text"
				placeholder="Adicionar to-do"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<button type="submit">Adicionar</button>
		</form>
	);
};

export default AddTodo;
