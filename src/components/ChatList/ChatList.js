import { useState } from 'react';
import './chatlist.scss';

export default function ChatList() {
    const [showMsg, setShowMsg] = useState(false);
    const [chatRoomOpen, setChatRoomOpen] = useState(false);

    function show(e) {
        if (e.target.checked) {
            setShowMsg(true)
        } else {
            setShowMsg(false)
        }
    }
    function showChatRoom(id) {
        console.log(id)
        setChatRoomOpen(true)
    }
    const chatListData = [
        {
            listId: '001',
            userId: '051564',
            userName: 'Allen粉多錢',
            userPhoto: '',
            // message :
            // [
            //     {
            //         id: '1',
            //         userName: 'Alice',
            //         message: 'Hello!',
            //         isUser: false
            //     },
            //     {
            //         id: '2',
            //         userName: 'You',
            //         message: 'Hi there!',
            //         isUser: true
            //     },
            //     {
            //         id: '3',
            //         userName: 'Alice',
            //         message: 'How are you?',
            //         isUser: false
            //     },
            // ]
        },
        {
            listId: '002',
            userId: '056264',
            userName: 'Bill',
            userPhoto: '',
        },
        {
            listId: '003',
            userId: '056514514',
            userName: 'Cathy',
            userPhoto: '',
        },
        {
            listId: '004',
            userId: '056514',
            userName: 'Jimmy',
            userPhoto: '',
        },
        {
            listId: '005',
            userId: '514514',
            userName: 'Zoe',
            userPhoto: '',
        },
    ]

    const messageData = [
        {
            msgId: '1',
            userName: 'Allen粉多錢',
            message: 'Hello!',
            isUser: false
        },
        {
            msgId: '2',
            userName: 'You',
            message: 'Hi ',
            isUser: true
        },
        {
            msgId: '3',
            userName: 'Allen粉多錢',
            message: '可以請教妳有關於房間的資訊嗎?',
            isUser: false
        },
    ]

    return (
        <>
            <input type="checkbox" name="show" id="show" onChange={show} />
            {showMsg ? (<>
                <ul className='chatList h-50 '>
                    {chatListData.map((chatList, i) => {
                        return (
                            <li className='chatItem p-2' key={chatList.listId} onClick={() => showChatRoom(chatList.chatListId)}>
                                <button type='button' className='w-100  btn'>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-4">
                                            <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='object-cover rounded-circle userPhoto' />
                                        </div>
                                        <div className="col-8 text-start">
                                            <h5 className='fw-bold'>{chatList.userName}</h5>
                                            <p className='text-truncate'>
                                                {chatList.message}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </li>
                        )
                    })}
                </ul>
                {chatRoomOpen && (
                    <div className="chatRoom h-50 border rounded shadow-sm">
                        <div className="chatHeader d-flex justify-content-between align-items-center p-2 border-bottom">
                            <h5 className="mb-0">Chat Room</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => setChatRoomOpen(false)}></button>
                        </div>
                        <div className="chatMessages overflow-auto p-3" style={{ height: '340px', backgroundColor: '#f8f9fa' }}>
                            {messageData.map((msg, i) => {
                                return (
                                    <div key={msg.id}>
                                        <div className={`messageItem mb-3 d-flex ${msg.isUser ? 'justify-content-end' : 'justify-content-start'}`}>
                                            <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className={`object-cover rounded-circle me-2 ${msg.isUser ? 'd-none':''}`} style={{ width: '40px', height: '40px' }} />
                                            <div className={`messageBubble p-2 rounded ${msg.isUser ? 'bg-primary text-white' : 'bg-light text-dark'}`} style={{ maxWidth: '75%' }}>
                                                <p className="mb-0">{msg.message}</p>
                                            </div>
                                        </div>
                                        <p>{msg.id}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="inputGroup ">
                            <div className="input-group ps-2">
                                <input type="text" className="form-control" placeholder="請輸入訊息...." />
                                <button className="btn btn-primary" type="button">Send</button>
                            </div>
                        </div>
                    </div>
                )}

            </>) : (<>
                <p className='text-center text-light fs-1 fw-bold'>尚未有聊天訊息</p>
            </>)}

        </>

    )
}