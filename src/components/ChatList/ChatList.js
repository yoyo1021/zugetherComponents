import { useState } from 'react';
import './chatlist.scss';

export default function ChatList() {
    const [showMsg, setShowMsg] = useState(false);
    function show(e) {
        if (e.target.checked) {
            setShowMsg(true)
        } else {
            setShowMsg(false)
        }
    }
    const msgData = [
        {
            msgId: '001',
            userId: '051564',
            userName: 'Allen粉多錢',
            userPhoto: '',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quae tenetur accusamus voluptas placeat dolorum recusandae,' +
                'nostrum exercitationem, harum iste itaque eius. Facilis laboriosam expedita sapiente iste, perferendis doloremque exercitationem?' +
                'Ab a aliquid dolorem quas perspiciatis repellendus explicabo, non ea. Sit, voluptates odit aut assumenda totam soluta architecto iure culpa officia repudiandae, aliquam deleniti beatae nemo, nisi illum laborum itaque.' +
                'Qui in dolorum harum dicta ipsa repudiandae illo reprehenderit! Molestiae hic dicta nemo laborum, voluptatibus inventore odit ea necessitatibus repudiandae? In minus id dolor repudiandae illo quos nam modi nostrum?' +
                'Facere deserunt veniam exercitationem. Nihil eveniet corporis distinctio fugit facere iusto nam facilis neque obcaecati, fugiat tempore earum sapiente ullam itaque incidunt officia? Repellendus soluta perferendis accusantium modi, possimus ratione.' +
                'Vero officiis eligendi placeat aliquam, quas suscipit repellendus porro odio hic earum quisquam distinctio consequuntur, delectus fuga reiciendis reprehenderit. Consectetur illo id beatae earum maxime ratione ex dignissimos dolorem quia.'
        },
        {
            msgId: '002',
            userId: '056264',
            userName: 'Bill',
            userPhoto: '',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quae tenetur accusamus voluptas placeat dolorum recusandae,' +
                'nostrum exercitationem, harum iste itaque eius. Facilis laboriosam expedita sapiente iste, perferendis doloremque exercitationem?' +
                'Ab a aliquid dolorem quas perspiciatis repellendus explicabo, non ea. Sit, voluptates odit aut assumenda totam soluta architecto iure culpa officia repudiandae, aliquam deleniti beatae nemo, nisi illum laborum itaque.' +
                'Qui in dolorum harum dicta ipsa repudiandae illo reprehenderit! Molestiae hic dicta nemo laborum, voluptatibus inventore odit ea necessitatibus repudiandae? In minus id dolor repudiandae illo quos nam modi nostrum?' +
                'Facere deserunt veniam exercitationem. Nihil eveniet corporis distinctio fugit facere iusto nam facilis neque obcaecati, fugiat tempore earum sapiente ullam itaque incidunt officia? Repellendus soluta perferendis accusantium modi, possimus ratione.' +
                'Vero officiis eligendi placeat aliquam, quas suscipit repellendus porro odio hic earum quisquam distinctio consequuntur, delectus fuga reiciendis reprehenderit. Consectetur illo id beatae earum maxime ratione ex dignissimos dolorem quia.'
        },
        {
            msgId: '003',
            userId: '056514514',
            userName: 'Cathy',
            userPhoto: '',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quae tenetur accusamus voluptas placeat dolorum recusandae,' +
                'nostrum exercitationem, harum iste itaque eius. Facilis laboriosam expedita sapiente iste, perferendis doloremque exercitationem?' +
                'Ab a aliquid dolorem quas perspiciatis repellendus explicabo, non ea. Sit, voluptates odit aut assumenda totam soluta architecto iure culpa officia repudiandae, aliquam deleniti beatae nemo, nisi illum laborum itaque.' +
                'Qui in dolorum harum dicta ipsa repudiandae illo reprehenderit! Molestiae hic dicta nemo laborum, voluptatibus inventore odit ea necessitatibus repudiandae? In minus id dolor repudiandae illo quos nam modi nostrum?' +
                'Facere deserunt veniam exercitationem. Nihil eveniet corporis distinctio fugit facere iusto nam facilis neque obcaecati, fugiat tempore earum sapiente ullam itaque incidunt officia? Repellendus soluta perferendis accusantium modi, possimus ratione.' +
                'Vero officiis eligendi placeat aliquam, quas suscipit repellendus porro odio hic earum quisquam distinctio consequuntur, delectus fuga reiciendis reprehenderit. Consectetur illo id beatae earum maxime ratione ex dignissimos dolorem quia.'
        },
        {
            msgId: '004',
            userId: '056514',
            userName: 'Jimmy',
            userPhoto: '',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quae tenetur accusamus voluptas placeat dolorum recusandae,' +
                'nostrum exercitationem, harum iste itaque eius. Facilis laboriosam expedita sapiente iste, perferendis doloremque exercitationem?' +
                'Ab a aliquid dolorem quas perspiciatis repellendus explicabo, non ea. Sit, voluptates odit aut assumenda totam soluta architecto iure culpa officia repudiandae, aliquam deleniti beatae nemo, nisi illum laborum itaque.' +
                'Qui in dolorum harum dicta ipsa repudiandae illo reprehenderit! Molestiae hic dicta nemo laborum, voluptatibus inventore odit ea necessitatibus repudiandae? In minus id dolor repudiandae illo quos nam modi nostrum?' +
                'Facere deserunt veniam exercitationem. Nihil eveniet corporis distinctio fugit facere iusto nam facilis neque obcaecati, fugiat tempore earum sapiente ullam itaque incidunt officia? Repellendus soluta perferendis accusantium modi, possimus ratione.' +
                'Vero officiis eligendi placeat aliquam, quas suscipit repellendus porro odio hic earum quisquam distinctio consequuntur, delectus fuga reiciendis reprehenderit. Consectetur illo id beatae earum maxime ratione ex dignissimos dolorem quia.'
        },
        {
            msgId: '005',
            userId: '514514',
            userName: 'Zoe',
            userPhoto: '',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quae tenetur accusamus voluptas placeat dolorum recusandae,' +
                'nostrum exercitationem, harum iste itaque eius. Facilis laboriosam expedita sapiente iste, perferendis doloremque exercitationem?' +
                'Ab a aliquid dolorem quas perspiciatis repellendus explicabo, non ea. Sit, voluptates odit aut assumenda totam soluta architecto iure culpa officia repudiandae, aliquam deleniti beatae nemo, nisi illum laborum itaque.' +
                'Qui in dolorum harum dicta ipsa repudiandae illo reprehenderit! Molestiae hic dicta nemo laborum, voluptatibus inventore odit ea necessitatibus repudiandae? In minus id dolor repudiandae illo quos nam modi nostrum?' +
                'Facere deserunt veniam exercitationem. Nihil eveniet corporis distinctio fugit facere iusto nam facilis neque obcaecati, fugiat tempore earum sapiente ullam itaque incidunt officia? Repellendus soluta perferendis accusantium modi, possimus ratione.' +
                'Vero officiis eligendi placeat aliquam, quas suscipit repellendus porro odio hic earum quisquam distinctio consequuntur, delectus fuga reiciendis reprehenderit. Consectetur illo id beatae earum maxime ratione ex dignissimos dolorem quia.'
        },

    ]
    return (
        <>
            <input type="checkbox" name="show" id="show" onChange={show} />
            {showMsg ? (<>
                <ul className='chatList h-50 '>
                    {msgData.map((msg, i) => {
                        return (
                            <li className='chatItems p-2' key={msg.msgId}>
                                <button type='button' className='w-100  btn '>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-4">
                                            <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='object-cover rounded-circle userPhoto' />
                                        </div>
                                        <div className="col-8 text-start">
                                            <h5 className='fw-bold'>{msg.userName}</h5>
                                            <p className='text-truncate'>
                                                {msg.message}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </li>
                        )
                    })}
                </ul>
                <div className="chatRoom h-50 border rounded shadow-sm">
                    <div className="chatHeader d-flex justify-content-between align-items-center p-2 border-bottom">
                        <h5 className="mb-0">Chat Room</h5>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="chatMessages overflow-auto p-3" style={{ height: '340px', backgroundColor: '#f8f9fa' }}>
                        {msgData.map((msg, i) => (
                            <div key={msg.msgId} className={`messageItem mb-3 d-flex ${msg.isUser ? 'justify-content-end' : 'justify-content-start'}`}>
                                <div className={`messageBubble p-2 rounded ${msg.isUser ? 'bg-primary text-white' : 'bg-light text-dark'}`} style={{ maxWidth: '75%' }}>
                                    <p className="mb-0">{msg.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="inputGroup ">
                        <div className="input-group ps-2">
                            <input type="text" className="form-control" placeholder="請輸入訊息...." />
                            <button className="btn btn-primary" type="button">Send</button>
                        </div>
                    </div>
                </div>

            </>) : (<>
                <p className='text-center text-light fs-1 fw-bold'>尚未有聊天訊息</p>
            </>)}

        </>

    )
}