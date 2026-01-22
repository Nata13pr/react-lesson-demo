import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import PaginationPage from "./PaginationPage.tsx";
import type {IQuote} from "../models/IQuote.ts";
import {loadQuotes} from "../services/quotes.service.ts";
import QuotesComponent from "../components/quotes-component/QuotesComponent.tsx";

const QuotesRage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [quotes, setQuotes] = useState<IQuote[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        loadQuotes(currentPage)
            .then(({quotes, total}) => {
                setQuotes(quotes)
                setTotal(total)
            })
            .catch(() => {
                refresh()
                    .then(() => loadQuotes(currentPage))
                    .then(({quotes, total}) => {
                        setQuotes(quotes)
                        setTotal(total)
                    })
            });
    }, [searchParams])
    return (
        <>
            <QuotesComponent quotes={quotes}/>
            {total > 20 && <PaginationPage total={total} limit={20}/>}
        </>
    )
}
export default QuotesRage;