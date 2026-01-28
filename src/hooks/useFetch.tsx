import {useEffect, useState} from "react";
import type {IResponseModel} from "../models/IResponseModel.ts";

export const useFetch = <T, K extends string>(url: string) => {
    const [data, setData] = useState<IResponseModel<T, K> | null>(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(value => setData(value));
    }, [url]);
    return data;
}