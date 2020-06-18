import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Page() {
    const history = useHistory()

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")


    const [tel, setTel] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [birth, setBirth] = useState("")
    const [gender, setGender] = useState("")
    // const [profile, setProfile] = useState("")

    const signUpClick = () => {
        console.log(id, password, tel, name, address, birth, gender);
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
                        tel : <input type="text" className="form-control" onChange={e=>setTel(e.target.value)} />
                    </div>
                    <div>
                        name : <input type="text" className="form-control" onChange={e=>setName(e.target.value)} />
                    </div>
                    <div>
                        address : <input type="text" className="form-control" onChange={e=>setAddress(e.target.value)} />
                    </div>
                    <div>
                        birth : <input type="text" className="form-control" onChange={e=>setBirth(e.target.value)} />
                    </div>
                    <div>
                        gender : <input type="text" className="form-control" onChange={e=>setGender(e.target.value)} />
                    </div>
                    <div>
                        profile : <input type="file" className="form-control" />
                    </div>
                    <div>
                        <button className="btn btn-secondary" onClick={()=>{signUpClick()}}>
                            회원가입
                        </button>
                    </div>
                    <div>
                        <Link to="/">
                            취소
                        </Link>
                    </div>
                </div>
                <div className="col-4" />
            </div>
        </div>
    )
}

export default Page