import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputURL, setInputURL] = useState("");
  
  const shortenURL = () => {
    if(inputURL.trim() == '')
    {
      alert("Write something man, You can't kill what's already dead \n ~ Albert Einstein")
    }
    axios.post('http://localhost:5001/api/url/shorten/', {
      longUrl: inputURL
    }).then(response => {
      console.log(response.data);
      setInputURL(response.data.shortUrl);
    }).catch(error => {
      console.error(error);
    }).finally(() => {
      console.log('Done!');
    })
  }

  return (
    <div className="App bg-[#00ead1] h-screen flex justify-center items-center">
      <div className="main-container h-[70%] bg-transparent w-[70%] flex flex-col justify-center items-center">
        <div className="title-container text-[60px] text-black">
          Shortify
          </div>
        <div className="input-container mt-10">
          <input type="text" className='border-none outline-none bg-white w-[500px] h-[40px] px-5 py-2 rounded-full' 
          onChange={(e) => setInputURL(e.target.value)} value={inputURL} placeholder="https://"/>
          </div>
          <div className="button-container mt-10">
            <button className="bg-blue-600 px-4 py-2 rounded-md text-white" onClick={shortenURL}>Shorten</button>
            </div>
        </div>
    </div>
  );
}

export default App;
