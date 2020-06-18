import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Page(props) {

    const history = useHistory()

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const loginClick = () => {
        console.log(id, password);
        history.push('/visit-proc-user/'+props.match.params.id)
    }

    const last = useSelector(state => state.dataStore)

    const goBack = () => {
        history.push(last.lastPage)
    }

    return (
        <div className="container-sm">
            <div className="row">
                <div className="col-4" />
                <div className="col">
                    <div>
                        id : <input type="email" className="form-control" onChange={e=>setId(e.target.value)} />
                    </div>
                    <div>
                        password : <input type="passowrd" className="form-control" onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button className="btn btn-secondary" onClick={()=>{loginClick()}}>
                            로그인
                        </button>
                    </div>
                    <div>
                        <button onClick={()=>{goBack()}}>취소</button>
                    </div>
                </div>
                <div className="col-4" />
            </div>
        </div>
    )
}

export default Page