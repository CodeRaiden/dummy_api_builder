import ModelForm from "../../components/ModelForm"
import { useContext, useEffect } from "react"
import { AppContext } from "../../context"
import { useParams } from "react-router-dom"
import { Bars } from "react-loader-spinner"
const Index = () => {
    const { fetchModel, model, loading } = useContext(AppContext)
    const params = useParams()
    const apiId = params.apiId
    const modelName = params.modelName
    let mParam = {
        name: "",
        description: "",
        tbl_params: []
    }
    if (model && !loading) {
        mParam = {
            name: model.name,
            description: model.desc,
            tbl_params: model.table_params
        }
    }
    useEffect(() => {
        fetchModel(apiId, modelName)
    }, [apiId, modelName])
    return (
        <>
            {
                loading ? <div className="loading-wrapper"><Bars height="80" width="80" color="#44859F" ariaLabel="bars-loading"
                    wrapperStyle={{}} wrapperClass="loading_element" visible={true} /> </div> : model ?
                    <ModelForm fList={model.table_params.map(p => p.index)} mParam={mParam} title={"EDIT MODEL"} btnTitle="EDIT" method="PUT" endpoint={`update_model/${modelName}`} />
                    : ""
            }
        </>
    )
}

export default Index
