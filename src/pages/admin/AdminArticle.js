import { Modal } from "bootstrap"
import { ArticleModal } from "../../components/Modal/AdminModal"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
export default function AdminArticle() {
    const [articles,setArticles] = useState([])

    const getData = async()=>{
        const res = await axios.get("https://localhost:7095/api/articles");
        setArticles(res.data)
    }

    const articleRef = useRef(null);
    useEffect(() => {
        getData();
        articleRef.current = new Modal("#articleModal", {
            backdrop: 'static'
        });
    }, [])

    const openArticleModal = () => {
        articleRef.current.show();
    }
    const closeModal = ()=>{
        articleRef.current.hide();
    }

    return (
        <>
            <ArticleModal closeModal={closeModal}/>
            <div className='p-3'>
                <h3>文章列表</h3>
                <hr />
                <div className='text-end'>
                    <button type='button' className='btn btn-primary btn-sm'
                        onClick={() => openArticleModal()}
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
                                    <th scope='col'>日期</th>
                                    <th scope='col'>狀態</th>
                                    <th scope='col'>編輯</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article,i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{article.title}</td>
                                            <td>{new Date(article.date).toLocaleDateString()}</td>
                                            <td>{article.enabled? '公開' : '未公開'}</td>
                                            <td>
                                                <button type='button' className='btn btn-success btn-sm'
                                                //onClick={() => openArticleModal('edit', article)}
                                                >
                                                    編輯
                                                </button>
                                                <button
                                                    type='button'
                                                    className='btn btn-outline-danger btn-sm ms-2'
                                                //onClick={() => openDeletetModal(article)}
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