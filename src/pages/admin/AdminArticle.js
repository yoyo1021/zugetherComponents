import { Modal } from "bootstrap";
import { ArticleModal } from "../../components/Modal/Admin/ArticleModal";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
export default function AdminArticle() {
    const [articles, setArticles] = useState([]);
    const [type, setType] = useState("create");
    const [confirmData,setConfirmData] = useState({});
    const [tempArticle, setTempArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy,setSortBy] = useState("created_at");
    const [sortAsc,setSortAsc] = useState(false);

    const getArticles = async () => {
        setIsLoading(true)
        const res = await axios.get("https://localhost:7095/api/articles");
        res.data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
        })
        setArticles(res.data)
        setIsLoading(false)
    }

    const getArticle = async (id) => {
        setIsLoading(true)
        const res = await axios.get(`https://localhost:7095/api/articles/${id}`);
        setTempArticle({
            ...res.data[0],
            photo: `data:image/jpeg;base64,${res.data[0].photo}`
        })
        setIsLoading(false)
    }

    const articleRef = useRef(null);
    const confirmRef = useRef(null)
    useEffect(() => {
        getArticles();
        articleRef.current = new Modal("#articleModal", {
            backdrop: 'static'
        });
        confirmRef.current = new Modal("#confirmModal", {
            backdrop: 'static'
        });
    }, [])

    const openArticleModal = (type, data) => {
        setType(type);
        setTempArticle(data);
        articleRef.current.show();
    }
    const openConfirmModal = (id,title)=>{
        confirmRef.current.show();
        console.log(id,title)
        setConfirmData({
            Id:id,
            Title:title
        })
    }
    const closeModal = () => {
        articleRef.current.hide();
        confirmRef.current.hide();
    }

    const handleDelete = async (id) => {  
        setIsLoading(true);
        axios.delete(`https://localhost:7095/api/articles/${id}`).then((res) => {
            //console.log(res.data.message);
            getArticles();
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
        closeModal();
    }

    const handleSortBy = async(item)=>{
        setSortAsc(!sortAsc);
        setSortBy(item);
        setIsLoading(true);
        const res = await axios.get("https://localhost:7095/api/articles");
        if(item ==="created_at"){
            if(sortAsc){
                res.data.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at)
                })
            }else{
                res.data.sort((a, b) => {
                    return new Date(a.created_at) - new Date(b.created_at)
                })
            }
        }else if (item ==="state"){
            if(sortAsc){
                res.data.sort((a, b) => {
                    return b.enabled - a.enabled
                })
            }else{
                res.data.sort((a, b) => {
                    return a.enabled - b.enabled
                })
            }
        }
        setArticles(res.data);
        setIsLoading(false);
    }

    return (
        <>
            <Loading isLoading={isLoading}></Loading>
            <ArticleModal closeModal={closeModal} type={type} tempArticle={tempArticle} getArticles={getArticles} />
            {/* Confirm Modal */}
            <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            是否刪除【<span className="text-danger">{confirmData.Title}</span>】文章
                        </div>
                        <div className="modal-footer d-flex justify-content-center border-0">
                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(confirmData.Id)}>刪除</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h3>文章列表</h3>
                <hr />
                <div className='text-end'>
                    <button type='button' className='btn btn-primary'
                        onClick={() => openArticleModal("create", {})}
                    >
                        建立新文章
                    </button>
                </div>
                {articles.length === 0 ? (
                    <>
                        <p>尚未建立文章</p>
                    </>
                )
                    :
                    (<>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>標題</th>
                                    <th scope='col'>建立日期
                                        <button className="btn py-0" onClick={()=>handleSortBy("created_at")}>
                                            <i className={sortBy==="created_at"?(sortAsc?"fa-solid fa-sort-up":"fa-solid fa-sort-down"):"fa-solid fa-sort"}></i>
                                        </button>
                                    </th>
                                    <th scope='col'>修改日期</th>
                                    <th scope='col'>狀態
                                    <button className="btn py-0" onClick={()=>handleSortBy("state")}>
                                            <i className={sortBy==="state"?(sortAsc?"fa-solid fa-sort-up":"fa-solid fa-sort-down"):"fa-solid fa-sort"}></i>
                                        </button>
                                    </th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{article.title}</td>
                                            <td>{new Date(article.created_at).toLocaleString()}</td>
                                            <td>{article.updated_at == null ? "尚未修改" : new Date(article.updated_at).toLocaleDateString()}</td>
                                            <td>{article.enabled ? <p className="text-success">已上架</p> : <span className="text-danger">未上架</span>}</td>
                                            <td className="text-end">
                                                <button type='button' className='btn btn-success btn-sm'
                                                    onClick={() => openArticleModal('edit', getArticle(article.articleId))}
                                                >
                                                    編輯
                                                </button>
                                                <button
                                                    type='button'
                                                    className='btn btn-outline-danger btn-sm ms-2'
                                                    onClick={()=>openConfirmModal(article.articleId, article.title)}
                                                >
                                                    刪除
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </>)}
            </div>
        </>

    )
}