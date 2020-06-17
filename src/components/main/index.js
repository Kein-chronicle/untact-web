import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Page() {
    const history = useHistory()

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const loginClick = () => {
        console.log(id, password);
        history.push('/lists')
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
                        <Link to="/signup">
                            아직 화원이 아니세요?
                        </Link>
                    </div>
                </div>
                <div className="col-4" />
            </div>
        </div>
    )
}

export default Page