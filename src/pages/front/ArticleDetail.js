import { useParams } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function ArticleDetail(){
    const {id} = useParams()

    return(
        <section className="articleDetail container py-5">
            <Breadcrumb preLink={'/articles'} prePage={'articles'} id={id} />
        </section>
    )
}