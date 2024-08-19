import aboutBg from '../../assets/images/aboutBg.jpg'
export default function About() {
    return (
        <section className='container py-5 h-100'>
            <div className="h-100 position-relative">
                {/* <div className="about h-100"></div> */}
                <img src = {aboutBg} alt="關於我們背景圖" className='w-100 object-cover aboutImg' style={{opacity:.5}}/>
                <p className='position-absolute top-0 start-0 p-5 fw-bold aboutTxt lh-base'>
                    我們致力於開發一合租平台，主要提供使用者們一個方便且可靠的管道來滿足您們的需求，
                    使用者可以透過篩選器來尋求符合自己需求的類型，並且可以透過聊天系統進一步的了解對方，
                    而使用者也可以透過完整的自我介紹來讓對方知道您的個性或者興趣。
                    雙方可以透過合租邀約的按鈕來表示想和您一起合租，一旦對方同意就可以一起合租。
                    我們也提供有關於租屋的文章，供使用者閱讀了解有關租屋的注意事項

                </p>
            </div>
            
        </section>
    )
}