import { useEffect, useRef, useState } from "react";
import { useChannel } from "ably/react";

export function MessageInput({ username }) {
	const [message, setMessage] = useState("");
	const inputRef = useRef(null);

	const { channel } = useChannel("general")

	useEffect(() => {
		inputRef.current.focus();
	})

	async function handleKeyPress(e) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			await onSendMessage()
		}
	};


	function handleChange({ target }) {
		setMessage(target.value);
	}


	async function onSendMessage() {
		try {
			await channel.publish("msg", { user: username, text: message });
			setMessage("");
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="input-area">
			<input type="text" value={message} onChange={handleChange} placeholder="Type a message..." ref={inputRef} onKeyPress={handleKeyPress}

			/>
			<button onClick={onSendMessage} >
				send
			</button>
		</div>
	);
}
