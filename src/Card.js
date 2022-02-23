import quote from './assets/quote.svg'
function Card(props){
    return <div className="p-4">
        <div className="flex w-64">
            <div className="bg-slate-50 p-4 shadow-lg rounded-lg relative">
                <div className="static">
                    <img src={quote} className="opacity-10 z-0 absolute left-0 top-0 bg-red-300" width="48" alt="quote"/>
                </div>
                <div className="text-gray-700 mt-4">{props.text}</div>
                <div className="text-sm pt-1 text-right font-thin">~ {props.authorName}</div>
            </div>
        </div>
    </div>
}

export default Card;