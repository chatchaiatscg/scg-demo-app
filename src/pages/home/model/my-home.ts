export interface IModelHome {
    device_type: string
    value_type: string
    unit: string
    device_id: string
    value: string
}

export interface IActiveState {
    active: boolean
    tempActive: boolean
    pmActive: boolean
}

export interface IHomeData {
    temperature: string
    aqi: string
    pm25: string
    co2: string
    tempRelay: boolean
    aqiRelay: boolean
}