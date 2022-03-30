import {AxiosInstance} from "axios";

import {IModelHome} from "../model/my-home";
import {myHomeData} from "../mock/my-home";
import internal from "stream";

export interface IHomeService {
    control: (type: string, value: boolean) => Promise<Boolean>
    getHomeData: () => Promise<IModelHome[]>
}

export const HomeService = (axiosInstance: AxiosInstance): IHomeService => {
    return {

        control: async(type: string, value: boolean): Promise<Boolean> => {
            const payload = {
                type: type,
                value: value
            }
            const api_endpoint = process.env.API_ENDPOINT ?? ''
            console.log('url: ', api_endpoint, ' json: ', payload)
            const {
                data,
                status
            }  = await axiosInstance.post(api_endpoint, payload)

            console.log('response', data)
            if (status !== 200) {
                return false
            }
            return true
        },

        getHomeData: async (): Promise<IModelHome[]> => {
            const {
                data,
                status
            } = await axiosInstance.get('https://ah3gx2g2pf.execute-api.ap-southeast-1.amazonaws.com/prod?edge_id=demo')
            if (status !== 200) {
                return []
            }
            return data.data
            //return Promise.resolve(myHomeData)

        }
    }
}
