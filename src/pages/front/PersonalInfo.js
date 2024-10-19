import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"

export default function PersonalInfo() {
    return (
        <section className="personalInfo container py-3 py-md-5">
            <Breadcrumb />
            <div className="d-flex flex-column align-items-center py-3">
                <div className="avatar" style={{ width: "200px", height: "200px" }}>
                    <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="rounded-circle object-cover w-100 h-100" />

                </div>
                <h1>吳康人</h1>
                <div className="d-flex flex-column align-items-start">
                    <p>暱稱 : 康康</p>
                    <p>出生日期 : 1999-01-01</p>
                    <p>性別 : 男</p>
                    <p>電話 : 0912345678</p>
                    <p>自我介紹 :大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。因為很重要所以講三次。 </p>
                </div>
            </div>
        </section>

    )
}