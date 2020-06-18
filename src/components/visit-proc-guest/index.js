import React, { useState } from 'react'

function Page(props) {
    console.log(props.match.params.id)
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("")
    const [birth, setBirth] = useState("")

    const complete = () => {
        console.log(name, tel, address, gender, birth);
        
    }
    return (
        <div>
            <input type="text" placeholder="이름" onChange={e=>setName(e.target.value)} />
            <input type="text" placeholder="전화번호" onChange={e=>setTel(e.target.value)} />
            <input type="text" placeholder="주소" onChange={e=>setAddress(e.target.value)} />
            <input type="text" placeholder="성별" onChange={e=>setGender(e.target.value)} />
            <input type="text" placeholder="생년월일" onChange={e=>setBirth(e.target.value)} />
            <button onClick={()=>{complete()}}>제출</button>
        </div>
    )
}

export default Page