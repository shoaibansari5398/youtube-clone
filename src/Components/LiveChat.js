import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState("");
	const dispatch = useDispatch();

	const chatMessages = useSelector((store) => store.chat.messages);

	useEffect(() => {
		const timer = setInterval(() => {
			dispatch(
				addMessage({
					name: generateRandomName(),
					message: makeRandomMessage(20),
				})
			);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<div className="border border-black bg-slate-50 h-[550px] overflow-scroll ml-1 p-2 rounded-lg flex flex-col-reverse border-b-0 rounded-b-none">
				<div>
					{chatMessages.map((chat, i) => (
						<ChatMessage key={i} name={chat.name} message={chat.message} />
					))}
				</div>
			</div>
			<form
				className="w-full p-2 ml-1 bg-slate-50 border border-black border-t-0"
				onSubmit={(e) => {
					e.preventDefault();

					dispatch(
						addMessage({
							name: "Shoaib Ansari",
							message: liveMessage,
						})
					);
					setLiveMessage("");
				}}
			>
				<input
					className="px-2 py-1 w-96 border border-slate-100"
					type="text"
					value={liveMessage}
					onChange={(e) => {
						setLiveMessage(e.target.value);
					}}
				/>
				<button className="px-4 py-1 mx-5 bg-gray-300">Send</button>
			</form>
		</>
	);
};

export default LiveChat;
