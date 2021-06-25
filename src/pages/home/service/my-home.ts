import {AxiosInstance} from "axios";

import {IModelHome} from "../model/my-home";
import {myHomeData} from "../mock/my-home";

export interface IHomeService {
    getMyHome: () => Promise<IModelHome>
}

export const HomeService = (axiosInstance: AxiosInstance): IHomeService => {
    return {
        getMyHome: (): Promise<IModelHome> => {
            // axiosInstance.get('')
            return Promise.resolve(myHomeData)
        }
    }
}
