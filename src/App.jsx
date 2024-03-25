
import { ChannelProvider, useChannel } from "ably/react";
import { useEffect, useState } from "react";

import { Messages } from "./components/messages";
import { MessageInput } from "./components/message-input";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const [username, setUsername] = useState('');

	useEffect(() => {
		const user = window.prompt("Please enter your username:");
		if (user) setUsername(user)
	}, []);

	return (
		username && (
			<>
				<Header />
				<div className="homepage">
					<ChannelProvider channelName="general">
						<div className="chat-container">
							<Messages />
							<MessageInput username={username} />
						</div >
					</ChannelProvider >
				</div>
				<Footer />
			</>)
	);
}

export default App;
