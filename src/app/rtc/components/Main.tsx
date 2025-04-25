
'use client';
import { useState } from "react";
import MessagesArea from "./MessagesArea";

type message = {
    username: string;
    message: string;
    timestamp: string;
}

const Main:React.FC = () => {

    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<message[]>([]);

    const sendMessage = () => {
        const newMessage: message = {
            username: name,
            message: message,
            timestamp: new Date().toISOString()
        }
        setMessages([...messages, newMessage]);
        console.log(messages);
        setMessage("");
    }
    return(
        <section className="flex flex-row justify-center items-center w-full h-full bg-slate-400">
            <div>
                <h1 className="text-3xl font-bold text-center">RTC</h1>
                <p className="text-lg text-center">Real Time Communication</p>
                <div className="flex flex-col justify-center items-center">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" className="border-2 border-gray-300 rounded-md p-2 mt-4"/>
                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Enter message" className="border-2 border-gray-300 rounded-md p-2 mt-4"/>
                <button onClick={sendMessage} className="bg-blue-500 text-white rounded-md p-2 mt-4">Send</button>
                </div>
                <div>
                <MessagesArea messages={messages} userName={name}/>
            </div>
            </div>
            
        </section>
    );
}

export default Main;