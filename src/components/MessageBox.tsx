interface MessageBoxProps {
    name: string;
    message: string;
}

const MessageBox = ({ name, message }: MessageBoxProps) => {
    return (
        <div className="w-[200px] h-[200px] border-4 border-[#C00000] rounded-md m-3 bg-white">
            <div className="py-3 font-['Hakyo']">
                <p className="py-2">From. {name}</p>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default MessageBox;
