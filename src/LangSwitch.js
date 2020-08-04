import React, { useState } from "react";
import App from "./App"

// use react-intl
import { IntlProvider } from "react-intl";
import  { LangContext as LangZH } from "./i18n/zh-TW/context.js"
import  { LangContext as LangUS } from "./i18n/en-US/context.js"


const defaultMessage = {
    buttonTW : LangZH.buttonTW,
    buttonUS : LangZH.buttonUS,
    title    : LangZH.title,
  }
  
  
function findMessage(locale){
switch(locale){
    case "en-US":
        return {
            ...defaultMessage, 
            buttonTW : LangUS.buttonTW,
            buttonUS : LangUS.buttonUS,
            title    : LangUS.title,
        };
    case "zh-TW":
    default:
    return defaultMessage;

}

}

export default function LangSwitch(){
    const {locale} = defaultMessage;
    return (
      <IntlProvider locale={locale} messages ={findMessage(locale)}  >
        <App findMessage={findMessage}/>
      </IntlProvider>
    )
}