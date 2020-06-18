import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Page(props) {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        return ()=>{
            dispatch({type:'DATASET', lastPage:'/visit/'+props.match.params.id})
        }
    }, [])
    const history = useHistory()
    return (
        <div>
            <button onClick={()=>history.push("/visit-login/"+props.match.params.id)}>
                회원
            </button>
            <button onClick={()=>history.push("/visit-proc-guest/"+props.match.params.id)}>
                비회원
            </button>
        </div>
    )
}

export default Page