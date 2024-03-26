import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import * as Ably from "ably";
import { AblyProvider } from "ably/react";
import './style/main.scss'



const client = new Ably.Realtime({ key: import.meta.env.VITE_ABLY_API_KEY, clientId: 'me' });


ReactDOM.createRoot(document.getElementById("root")).render(
	<AblyProvider client={client}>
		<App />
	</AblyProvider>
);
