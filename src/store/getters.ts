import {IStoreState} from '@/types'
export default {
    isLoading:(state:IStoreState) => state.isLoading ? '加载中':'加载完毕'
}