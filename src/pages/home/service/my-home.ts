import {AxiosInstance} from "axios";

import {IModelHome} from "../model/my-home";
import {myHomeData} from "../mock/my-home";

export interface IHomeService {
    getMyHome: () => Promise<IModelHome[]>
}

export const HomeService = (axiosInstance: AxiosInstance): IHomeService => {
    return {
        getMyHome: async (): Promise<IModelHome[]> => {
            // const {
            //     data,
            //     status
            // } = await axiosInstance.get('https://ah3gx2g2pf.execute-api.ap-southeast-1.amazonaws.com/prod?edge_id=demo')
            // console.log('data' , data)
            // if (status !== 200) {
            //     return []
            // }
            //
            // return data.data
            return Promise.resolve(myHomeData)

        }
    }
}
