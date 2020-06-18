import React from 'react'
import { useHistory } from 'react-router';

function Page({page}) {
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
                            참여자
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
                            이름
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