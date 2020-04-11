import {IStoreState} from '@/types'
import axios from 'axios'
type TAction = {
    state:IStoreState
    commit:Function
}
let actions = {
    UPDATE_HOME:({state,commit}:TAction,payload:object)=>{
        axios({
            url:'/data/user.json',
            params:payload
        }).then(
            res => {
                commit ('UPDATE_HOME',res.data)
            }
        )
    }
}
export default actions