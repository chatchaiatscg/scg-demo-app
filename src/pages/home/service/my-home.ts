import {AxiosInstance} from "axios";

import {IModelHome} from "../model/my-home";
import {myHomeData} from "../mock/my-home";
import internal from "stream";
import {
    BASE_URL_CONTROL_REST, 
    BASE_URL_DATA_REST
} from "core/utils/env";

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
            const api_endpoint = `${BASE_URL_CONTROL_REST}`;
            console.log('API CONTROL: ', api_endpoint, ' json: ', payload)
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
            const api_endpoint = `${BASE_URL_DATA_REST}`;
            console.log('API DATA: ', api_endpoint)

            const {
                data,
                status
            } = await axiosInstance.get(api_endpoint)
            if (status !== 200) {
                return []
            }
            return data.data
            //return Promise.resolve(myHomeData)

        }
    }
}
