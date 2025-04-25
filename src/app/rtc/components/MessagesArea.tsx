
type message = {
    username: string;
    message: string;
    timestamp: string;
}

type Props = {
    messages: message[];
    userName: string;
}
const MessagesArea:React.FC<Props> = ({messages,userName}) => {
    return (
        <>
        {
                    messages.map((message, index) => (
                        <div key={index} className={`${userName !== message.username? 'bg-white':'bg-slate-500'} p-2 rounded-md mt-2`}>
                            <p className="font-bold">{message.username}</p>
                            <p>{message.message}</p>
                            <p className="text-sm">{new Date(message.timestamp).toLocaleString()}</p>
                        </div>
                    ))
                }
        </>
    );
}

export default MessagesArea;