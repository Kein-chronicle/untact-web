import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

function Page ({page}) {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        return ()=>{
            if (page === 'made-list') {
                dispatch({type:'DATASET', lastPage:page})
            }
        }
    }, [])

    console.log(page);
    const history = useHistory()

    const goInfo = (id) => {
        history.push("/meeting-info/"+id)
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
                            진행여부
                        </td>
                        <td>
                            참여자수
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
                            진행중
                        </td>
                        <td>
                            55
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Page