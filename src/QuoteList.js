import Card from "./Card";

export function QuoteList(props) {
    const quotes = props.list
    const list = quotes.map((q, i) => <Card key={i} authorName={q.authorName} text={q.text} />)
    return list
}