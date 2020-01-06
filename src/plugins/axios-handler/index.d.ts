export interface Params<T> {
    [key: string]: T;
}

export interface AxiosHandlerStatic<T> {
    requestGet ( url: string, params?: Params<T> ): Function;
    requestPost ( url: string, params?: Params<T> ): Function;
}

declare const AxiosHandler: AxiosHandlerStatic;
export default AxiosHandler;
