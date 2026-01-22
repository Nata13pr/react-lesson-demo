import "./QuotesComponent.css"
import type {FC} from "react";
import type {IQuote} from "../../models/IQuote.ts";
import QuoteComponent from "../quote-component/QuoteComponent.tsx";

type QuotesPropsType = {
    quotes: IQuote[]
}
const QuotesComponent: FC<QuotesPropsType> = ({quotes}) => {
    return (
        <ul className='quotes'>
            {
                quotes.map(quote => <QuoteComponent quote={quote} key={quote.id}/>)
            }
        </ul>
    )
}
export default QuotesComponent