import {useSearchParams} from "react-router";
import {type FC, useEffect, useState} from "react";
import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";

type PaginationPropsType = {
    total: number,

}
const PaginationPage: FC<PaginationPropsType> = ({total}) => {
    const [page, setPage] = useState<number>(1);
    const [query, setQuery] = useSearchParams()
    const skip: number = Number(query.get('skip')) || 0;
    const limit: number = Number(query.get('limit')) || 5;

    useEffect(() => {
        setPage(Math.floor(skip / limit) + 1);
    }, [query]);

    const handleOnClickNext = () => {
        if (Number(skip) + Number(limit) < total) {
            let currentSkip = Number(skip) + 5;
            setPage((prevState => prevState + 1))
            setQuery({limit: limit.toString(), skip: currentSkip.toString()})
        }
    }
    const handleOnClickPrev = () => {
        if (Number(skip) > 0) {
            let currentSkip = Number(skip) - 5;
            setPage((prevState => prevState - 1))
            setQuery({limit: limit.toString(), skip: currentSkip.toString()})
        }
    }
    return (
        <PaginationComponent handleOnClickPrev={handleOnClickPrev} handleOnClickNext={handleOnClickNext} page={page}/>
    )
}
export default PaginationPage