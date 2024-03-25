import { useChannel } from 'ably/react';
import { useState } from 'react';



export function Messages() {

	const [messages, updateMessages] = useState([]);

	const { channel } = useChannel("general", (message) => {
		updateMessages((prev) => [...prev, message]);
	});

	return (
		<div className="messages">
			{messages.map((msg, index) => (
				<div key={index} className="message">
					<div className="message-header">
						<span className="username">{msg.data.user}</span>
						<span className="timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</span>
					</div>
					<div className="message-content">{msg.data.text}</div>
				</div>
			))}
		</div>
	);
}
