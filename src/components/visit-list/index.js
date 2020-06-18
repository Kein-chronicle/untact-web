import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

function Page({page}) {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        return ()=>{
            if (page === 'visit-list') {
                dispatch({type:'DATASET', lastPage:page})
            }
        }
    }, [])

    console.log(page);
    const history = useHistory()

    const goInfo = (id) => {
        history.push("/visit-info/"+id)
    }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            No.
                        </td>
                        <td>
                            제목
                        </td>
                        <td>
                            방문일
                        </td>
                        <td>
                            시간
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={()=>goInfo("id")}>
                        <td>
                            1
                        </td>
                        <td>
                            제목입니다
                        </td>
                        <td>
                            2020-03-23
                        </td>
                        <td>
                            13:22
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Page