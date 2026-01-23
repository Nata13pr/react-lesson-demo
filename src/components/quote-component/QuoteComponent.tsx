import "./QuoteComponent.css"
import type {FC} from "react";
import type {IQuote} from "../../models/IQuote.ts";

type QuotePropsType = {
    quote: IQuote
}
const QuoteComponent: FC<QuotePropsType> = ({quote}) => {
    return (
        <li className="list-quotes">
            <div className="quote-card ">
                <div className="quote-accent"></div>
                <blockquote className="quote-text">
                    “{quote.quote}”
                </blockquote>
                <cite className="quote-author">
                    — {quote.author}
                </cite>
                <div className="quote-footer">
                    <span>ID: {Math.floor(quote.id)}</span>
                    <span>Format: IQuote</span>
                </div>
            </div>
        </li>
    )
}
export default QuoteComponent