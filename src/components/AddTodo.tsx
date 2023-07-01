import { FormEvent, useState } from "react";

const AddTodo = () => {
	const [newTodo, setNewTodo] = useState("");

	const handleNewTodo = (e: FormEvent) => {
		e.preventDefault();

		console.log(newTodo);
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
