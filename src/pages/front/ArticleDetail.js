import { useParams } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function ArticleDetail() {
    const article =
    {
        id: '001',
        title: '租屋指南：如何找到理想室友',
        image: 'https://via.placeholder.com/800x300',
        content: `
      <p>找到理想的室友對於維持舒適的居住環境至關重要。在開始尋找室友之前，您應該確定您的需求和偏好，包括是否願意與寵物共住、生活作息是否合拍等等。</p>
      <h2>第一步：了解自己的需求</h2>
      <p>在開始尋找室友之前，您需要確定一些基本的要求，例如租房預算、地點、房型。如果您希望有一個安靜的生活環境，那麼就需要找到一個安靜且規律的室友。</p>
      <h2>第二步：如何找到潛在室友</h2>
      <p>透過我們的平台可以幫助您尋找室友，在這裡您可以發布您的房間來徵求室友或透過篩選器來尋求理想的房源及室友。</p>
      <h2>第三步：面試潛在的室友</h2>
      <p>一旦找到潛在的室友，您應該進行一個初步的面試。可以在線上交流，也可以約定見面，了解對方的生活方式、職業和性格是否適合共同生活。</p>
      <blockquote>"室友的選擇影響著你每天的生活，慎重考慮你的選擇。"</blockquote>
      <h2>第四步：簽訂租房協議</h2>
      <p>一旦您找到了合適的室友，務必制定一份詳細的租房協議，明確彼此的責任和義務，確保未來能夠和諧共處。</p>
      <p>這份指南旨在幫助您找到合適的室友，並在共同租房的過程中避免潛在的問題。</p>
    `,
        date: '2024/05/01'
    }

    return (
        <section className="articleDetail container py-5">
            <Breadcrumb />
            <h1>{article.title}</h1>
            <p>發布時間 : {article.date}</p>
            <img src={article.image} alt="" className="w-100 object-cover" />
            <div className="articleContent">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
        </section>
    )
}