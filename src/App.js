import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


// import i18n lang
import { useIntl } from "react-intl";
const DEFAULT_LOCALE = "zh-TW"

function App(props) {
  const [locale, setLocale] = useState(DEFAULT_LOCALE)
  const {title, buttonTW, buttonUS } = props.findMessage(locale);
  console.log("check===>", locale, title, buttonTW, buttonUS);
  return (
    <div className="App">
      <h2>{title}</h2>
      <p><button
      onClick={()=>{
        console.log("click buttonTW");
        setLocale("zh-TW");
      }}
      >{buttonTW}
      </button></p>

      
      <p><button
      onClick={()=>{
        console.log("click buttonEN");
        setLocale("en-US");
      }}
      >{buttonUS}
      </button></p>
    </div>
  );
}

export default App;
