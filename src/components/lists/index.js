import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'


import MadeList from '../made-list'
import VisitList from '../visit-list'

function Page(props) {

    const dispatch = useDispatch()
    const thisPath = props.location.pathname
    
    useEffect(()=>{
        return ()=>{
            dispatch({type:'DATASET', lastPage:thisPath})
        }
    }, [])


    const history = useHistory()

    const goMake = () => {
        history.push("/create-meeting")
    }

    return (
        <div>
            <div>
                <button onClick={()=>{goMake()}}>모임생성</button>
            </div>
            <MadeList page="main" />
            <VisitList page="main" />
        </div>
    )
}

export default Page