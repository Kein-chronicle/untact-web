import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

function Page(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const thisPath = props.location.pathname
    
    useEffect(()=>{
        return ()=>{
            dispatch({type:'DATASET', lastPage:thisPath})
        }
    }, [])

    const last = useSelector(state => state.dataStore)

    const goBack = () => {
        history.push(last.lastPage)
    }

    return (
        <div>
            <button className="btn" onClick={()=>{goBack()}}>뒤로가기</button>
            <div>제목</div>
            <div>설명</div>
            <div>주소</div>
            <div>방문일시</div>
            <div>제공정보</div>
        </div>
    )
}

export default Page