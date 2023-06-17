import "./index.scss"
import Header from "../../components/Header"
import DetailPage from "../../components/DetailPage"
import Sidebar from "../../components/Sidebar"

const index = () => {
    const navs = [
        {
            title: "MY APIS",
            path: '/my_apis'
        },
        {
            title: "CREATE NEW API",
            path: '/my_apis/create'
        }
    ]
    return (
        <div>
            <Header navs={navs} activeNav="MY APIS" />
            <section className="my_api_body">
                <Sidebar />
                <DetailPage />
            </section>
        </div>
    )
}

export default index
