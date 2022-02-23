import { useEffect, useState } from 'react';
import './App.css';
import search from './assets/search.svg'
import { QuoteList } from './QuoteList';

function App() {
  const apiUrl = "http://localhost:8080/quote"
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(apiUrl + "/all").then(
      response => {
        if (response.ok) {
          return response.json()
        }
        throw response
      }).then(data => setData(data))
      .catch( error => {
        console.error("error");
      })
  }, [])

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-sm">
          <div className="pl-4 text-center font-bold leading-relaxed font-mono tracking-widest text-white py-2 text-2xl">
            QuikQuote
          </div>
          <div className="flex absolute right-4 border-2 border-gray-500 pr-2 mt-2 bg-gray-500">
            <input className="focus:outline-none p-1 text-base" type="text" />
            <div className="text-white pl-2 items-center flex"><img src={search} /></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-full justify-center items-center">
        <div className="inline-flex p-4 justify-center items-center lg:mt-8 mt-4 my-2 flex-wrap">
          <QuoteList list={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
