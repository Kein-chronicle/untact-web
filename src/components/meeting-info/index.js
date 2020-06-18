import React, { useEffect } from 'react'

import VisitList from './book-visit-list'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

function Page(props) {
    const history = useHistory()
    const id = props.match.params.id

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
            <button className="btn btn-secondary" onClick={()=>goBack()}>Go back</button>
            <div>
                제목
            </div>
            <div>
                주소
            </div>
            <div>
                설명
            </div>
            <div>
                참여자수 : 10
            </div>
            <div>
                엑셀 다운
            </div>
            <VisitList page={id} />
        </div>
    )
}

export default Page