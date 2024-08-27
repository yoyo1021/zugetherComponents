export default function AdminArticle() {
    const articles = [
        {
            id:'001',
            title:'title1',
            create_at:'2024/08/25',
            author:'manager',
            isPublic:true
        },
        {
            id:'002',
            title:'title2',
            create_at:'2024/08/26',
            author:'manager',
            isPublic:false
        },
        {
            id:'003',
            title:'title3',
            create_at:'2024/08/27',
            author:'manager',
            isPublic:true
        },
    ]

return (
    <div className='p-3'>
        <h3>文章列表</h3>
        <hr />
        <div className='text-end'>
            <button type='button' className='btn btn-primary btn-sm'
            //onClick={() => openArticleModal('create', {})}
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
                            <th scope='col'>作者</th>
                            <th scope='col'>狀態</th>
                            <th scope='col'>編輯</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => {
                            return (
                                <tr key={article.id}>
                                    <td>{article.title}</td>
                                    <td>{new Date(article.create_at).toLocaleDateString()}</td>
                                    <td>{article.author}</td>
                                    <td>{article.isPublic ? '公開' : '未公開'}</td>
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
)
}