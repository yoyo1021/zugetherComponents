import axios from "axios"
import { useEffect, useState } from "react";

export default function AdminMemeber() {
    const [members, setMembers] = useState([]);
    const getData = async () => {
        const res = await axios.get("https://localhost:7095/api/member");
        console.log(res)
        setMembers(res.data);
    }
    useEffect(() => {
        //getData()
    }, [])
    return (
        <>
            <div className='p-3'>
                <h3>會員列表</h3>
                <hr />
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col' className="text-center">會員編號</th>
                            <th scope='col' className="text-center">會員信箱</th>
                            <th scope='col' className="text-center">會員名字</th>
                            <th scope='col' className="text-center">會員生日</th>
                            <th scope='col' className="text-center">會員性別</th>
                            <th scope='col' className="text-center">會員電話</th>
                            <th scope='col' className="text-center">會員創建時間</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((m, i) => {
                            return (
                                <tr key={i}>
                                    <td className="text-center">{m.mid}</td>
                                    <td className="text-center">{m.email}</td>
                                    <td className="text-center">{m.name}</td>
                                    <td className="text-center">{new Date(m.birth).toLocaleDateString()}</td>
                                    <td className="text-center">{m.gender == "male" ? "男" : "女"}</td>
                                    <td className="text-center">{m.phone}</td>
                                    <td className="text-center">{new Date(m.createDate).toLocaleString()}</td>
                                    <td>
                                        <button type='button' className='btn btn-success btn-sm'
                                        //onClick={() => openArticleModal('edit', article)}
                                        >
                                            編輯
                                        </button>
                                    
                                        <button type='button' className='btn btn-outline-danger btn-sm ms-2'
                                        //onClick={() => openArticleModal('edit', article)}
                                        >
                                            刪除
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>
        </>

    )
}