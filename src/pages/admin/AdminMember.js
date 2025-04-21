import axios from "axios";
import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import MemberModal from "../../components/Modal/Admin/MemberModal";
import Loading from "../../components/Loading/Loading";
import Alert from "../../components/Alert/Alert";

export default function AdminMemeber() {
    const [members, setMembers] = useState([]);
    const [tempData, setTempData] = useState({});
    const [confirmData, setConfirmData] = useState({});
    const [alert, setAlert] = useState({
        color: "",
        msg: "",
        status: false
    })
    const [sortBy, setSortBy] = useState("id");
    const [sortAsc, setSortAsc] = useState(false);
    const memberRef = useRef(null);
    const confirmRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const getMembers = async () => {
        setIsLoading(true);
        const res = await axios.get("https://localhost:7095/api/member");
        setMembers(res.data);
        setIsLoading(false);
    }
    useEffect(() => {
        getMembers();
        memberRef.current = new Modal("#memberModal", {
            backdrop: 'static'
        });
        confirmRef.current = new Modal("#confirmModal", {
            backdrop: 'static'
        });
    }, [])

    const openMemerModal = async (id) => {
        setIsLoading(true);
        const res = await axios.get(`https://localhost:7095/api/member/${id}`);
        setTempData(res.data[0]);
        setIsLoading(false);
        memberRef.current.show();
    }

    const closeModal = () => {
        memberRef.current.hide();
        confirmRef.current.hide();
    }

    const openConfirmModal = (id, name) => {
        confirmRef.current.show();
        setConfirmData({
            Id: id,
            Name: name
        })
    }

    const handleDelete = (id) => {
        try {
            setIsLoading(true);
            axios.delete(`https://localhost:7095/api/member/${id}`).then((res) => {
                setAlert({
                    color: "success",
                    msg: res.data.message,
                    status: true
                })
                getMembers();
                setIsLoading(false);
                setTimeout(() => {
                    setAlert({
                        ...alert,
                        status: false
                    })
                }, 2000);
            }).catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
        closeModal();
    }

    const handleSortBy = async(item)=>{
        setSortAsc(!sortAsc);
        setSortBy(item);
        setIsLoading(true);
        const res = await axios.get("https://localhost:7095/api/member");
        if(item ==="id"){
            if(sortAsc){
                res.data.sort((a, b) => {
                    return b.mid - a.mid
                })
            }else{
                res.data.sort((a, b) => {
                    return a.mid - b.mid
                })
            }
        }else if (item ==="gender"){
            if(sortAsc){
                res.data.sort((a, b) => a.gender.localeCompare(b.gender));
            }else{
                res.data.sort((a, b) => b.gender.localeCompare(a.gender));

            }
        }
        setMembers(res.data);
        setIsLoading(false);
    }

    return (
        <>
            <Loading isLoading={isLoading} />
            <MemberModal closeModal={closeModal} tempData={tempData} getMembers={getMembers} />
            <Alert color={alert.color} status={alert.status} alertTxt={alert.msg} />
            {/* Confirm Modal */}
            <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            是否刪除【<span className="text-danger">{confirmData.Name}</span>】會員
                        </div>
                        <div className="modal-footer d-flex justify-content-center border-0">
                            <button type="button" className="btn btn-danger"
                                onClick={() => handleDelete(confirmData.Id)}
                            >刪除</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h3>會員列表</h3>
                <hr />
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col' className="text-center">會員編號
                                <button className="btn py-0" onClick={() => handleSortBy("id")}>
                                    <i className={sortBy === "id" ? (sortAsc ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down") : "fa-solid fa-sort"}></i>
                                </button>
                            </th>
                            <th scope='col' className="text-center">會員信箱</th>
                            <th scope='col' className="text-center">會員名字</th>
                            <th scope='col' className="text-center">會員生日</th>
                            <th scope='col' className="text-center">會員性別
                            <button className="btn py-0" onClick={() => handleSortBy("gender")}>
                                    <i className={sortBy === "gender" ? (sortAsc ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down") : "fa-solid fa-sort"}></i>
                                </button>
                            </th>
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
                                            onClick={() => openMemerModal(m.mid)}
                                        >
                                            編輯
                                        </button>

                                        <button type='button' className='btn btn-outline-danger btn-sm ms-2'
                                            onClick={() => openConfirmModal(m.mid, m.name)}
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