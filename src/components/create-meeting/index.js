import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

function Page() {

    const history = useHistory()
    const [title, setTitle] = useState("")
    const [address, setAddress] = useState("")
    const [des, setDes] = useState("")
    const [needInfo, setNeedInfo] = useState({
        name: {ko: '이름', need: true},
        tel: {ko: '전화번호', need: false},
        address: {ko: '주소', need: false},
        birth: {ko: '생년월일', need: false},
        gender: {ko: '성별', need: false},
        picture: {ko: '사진', need: false}
    })

    const changeState = (e, key) => {
        var newNeeds = needInfo
        newNeeds[key]['need'] = e.target.checked
        setNeedInfo(newNeeds)
    }

    const [needView, setNeedView] = useState([])

    useEffect(()=>{

        var arr = []
        
        for (var key in needInfo) {
            const value = needInfo[key]
            const ko = value.ko
            const checked = value.checked
            arr.push(makeNeedView(key, ko, checked))
        }

        setNeedView(arr)

    }, [])

    const makeNeedView = (key, ko, checked) => {
        return (
            <div key={key} className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" defaultChecked={checked} onChange={e=>changeState(e, key)} />
                    </div>
                </div>
                <input type="text" className="form-control" defaultValue={ko} disabled={true} />
            </div>
        )
    }

    const complete_onClick = () => {
        console.log(title, address, des, needInfo);
        history.push("/meeting-info/"+"id")
    }

    const last = useSelector(state => state.dataStore)

    const goBack = () => {
        history.push(last.lastPage)
    }

    return (
        <div>
            <div>
                create meeting
            </div>
            <div>
                <input type="text" placeholder="제목" className="form-control" onChange={e=>setTitle(e.target.value)} />
                <input type="text" placeholder="한줄설명" className="form-control" onChange={e=>setDes(e.target.value)} />
                <input type="text" placeholder="주소" className="form-control" onChange={e=>setAddress(e.target.value)} />
                {/* need view */}
                {needView}
            </div>
            <div>
                <button className="btn btn-secondary" onClick={()=>complete_onClick()} >만들기</button>
                <button className="btn btn-secondary" onClick={()=>goBack()} >취소</button>
            </div>

        </div>
    )
}

export default Page