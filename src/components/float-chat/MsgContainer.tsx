import InputChat from "./InputChat";
import RoomMessage from "./RoomMessage";

const MsgContainer = () => {
    return (
        <div className="flex flex-col flex-auto px-4">
            <RoomMessage />
            <InputChat />
        </div>
    )
}

export default MsgContainer