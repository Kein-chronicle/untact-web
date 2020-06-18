import React, { useState, useEffect } from 'react'

function Page(props) {
    console.log(props.match.params.id)
    const [needInfo, setNeedInfo] = useState({
        name: {ko: '이름', need: true},
        tel: {ko: '전화번호', need: false},
        address: {ko: '주소', need: false},
        birth: {ko: '생년월일', need: false},
        gender: {ko: '성별', need: false},
        picture: {ko: '사진', need: false}
    })

    const [needView, setNeedView] = useState([])

    const changeState = (e, key) => {
        var newNeeds = needInfo
        newNeeds[key]['need'] = e.target.checked
        setNeedInfo(newNeeds)
    }
    const makeNeedView = (key, ko, checked) => {
        return (
            <div key={key} className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" defaultChecked={checked} onChange={e=>changeState(e, key)} />
                    </div>
                </div>
                <input type="text" className="form-control" defaultValue={ko} disabled={false} />
            </div>
        )
    }

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

    return (
        <div>
            {needView}
            <button>남기기</button>
        </div>
    )
}

export default Page