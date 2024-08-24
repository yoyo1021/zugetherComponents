import { useRef , useEffect} from 'react';
import './filterOffcanvas.scss';
import { Offcanvas } from 'bootstrap';


export default function ChatOffcanvas({onOpenChatList,children}){
    const chatRef = useRef(null);
    useEffect(() => {
        chatRef.current = new Offcanvas('#chatOffcanvas', {
            backdrop: 'static'
        });
    }, []);
    

    function openChatList() {
        chatRef.current.show();
    }

    function closeChatList() {
        chatRef.current.hide();
    }
    useEffect(() => {
        if (onOpenChatList) {
            onOpenChatList(() => openChatList);
        }
    }, [onOpenChatList]);
    

    return(
        <div className="offcanvas offcanvas-end" ref={chatRef} tabIndex="-1"  id="chatOffcanvas" aria-labelledby="offcanvasWithBackdropLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title " id="offcanvasWithBackdropLabel">聊天室</h5>
                    <button type="button" className="btn-close text-reset" onClick={closeChatList}></button>
                </div>
                <div className="offcanvas-body px-0">
                    {children}
                </div>
            </div>
    )
}