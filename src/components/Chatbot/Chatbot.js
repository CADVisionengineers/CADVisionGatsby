import React, { useContext, useState } from "react";
import "./Chatbot.css";
import loadable from '@loadable/component';
const ChatBot = loadable(() => import('react-simple-chatbot'));

import { ThemeProvider } from "styled-components";
import { useHistory } from "react-router-dom";
import chatbotpng from "../../assets/images/chat-bot.svg"
import chatboticon from "../../assets/images/ChatbotIcon.svg"
import funfacts from "./Funfacts";

const theme = {
  background: "#F4F5F6",
  fontFamily: "sans-serif",
  headerBgColor: "#15bea9",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#65b1ff",
  botFontColor: "#fff",
  userBubbleColor: "#59dd64",
  userFontColor: "#fff",
};

const steps = [
  {
    id: "1",
    message: "Hey! I am Medi-bot, how are you feeling today",
    trigger: "expressions",
  },
  {
    id: "expressions",
    options: [
      { value: "veryHappy", label: "😀", trigger: "veryHappy" },
      { value: "happy", label: "🙂", trigger: "happy" },
      { value: "normal", label: "😐", trigger: "normal" },
      { value: "sad", label: "☹️", trigger: "sad" },
      { value: "angry", label: "😡", trigger: "angry" },
    ],
  },
  {
    id: "veryHappy",
    message: "Great Me too 😍",
    trigger: "help",
  },
  {
    id: "happy",
    message:
      "Hmm, Looks Like You are in good mood. Well I can make it great 😊",
    trigger: "help",
  },
  {
    id: "normal",
    message:
      "Ooh, Are You Confused Sir ? Don't Worry I am here to Assist You 👻",
    trigger: "help",
  },
  {
    id: "sad",
    message:
      "I am sorry to here that 😟 . Well i would suggest to read our random Fun-fact or Visit our Yoga Services or Read the latest feeds. You will feel better.🙂",
    trigger: "help",
  },
  {
    id: "angry",
    message:
      "😐 Oops, Did i do something wrong....But wait i am a bot i can't do that..🤥.  Well i suggest you to relax your mind, play some games,  watch some movies  and eat a lot of healthy tasty food just like me..😝",
    trigger: "help",
  },
  {
    id: "help",
    message: "How can I help you?",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      { value: "services", label: "Services", trigger: "services" },
      {
        value: "Contact",
        label: "Contact",
        trigger: (() => window.location.replace('/contact')),
      },
      {
        value: "funFact",
        label: "Give a random funfact",
        trigger: "funFact",
      },
      { value: "exit", label: "Exit", trigger: "end" },
    ],
  },
  {
    id: "services",
    message: "select one of these services",
    trigger: "selectServices",
  },
  {
    id: "selectServices",
    options: [
      { value: "CAD Customization Services", label: "CAD Customization Services", trigger: (() => window.location.replace('/services/cad-customization-services')) },
      { value: "Custom CAD Software Solution",label: "Custom CAD Software Solution",trigger: (() => window.location.replace('/services/custom-engineering-solutions'))},
      { value: "Knowledge Based Engineering", label: "Knowledge Based Engineering", trigger: (() => window.location.replace('/services/knowledge-based-engineering')) },
      { value: "Product Development Services", label: "Product Development Services", trigger: (() => window.location.replace('/services/outsourced-product-development')) },

 
    ],
  },
  {
    id: "selectedService",
    message: "opened {previousValue}",
    trigger: "end",
  },
  {
    id: "moreHelp",
    message: "do you meed more help?",
    trigger: "moreHelp-yes",
  },
  {
    id: "moreHelp-yes",
    options: [
      { value: "yes", label: "Yes", trigger: "help" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },
  {
    id: "calculateBMI",
    message: "Let's calculate your BMI",
    trigger: "BMIHeightMessage",
  },
  {
    id: "BMIHeightMessage",
    message: "Enter your height",
    trigger: "BMIHeight",
  },
  {
    id: "BMIHeight",
    user: true,
    trigger: "BMIWeightMessage",
  },
  {
    id: "BMIWeightMessage",
    message: "Enter your weight",
    trigger: "BMIWeight",
  },
  {
    id: "BMIWeight",
    user: true,
    trigger: "BMIResult",
  },
  {
    id: "BMIResult",
    component: <BMI />,
    asMessage: true,
    trigger: "BMIKnowMore",
  },
  {
    id: "BMIKnowMore",
    message: "Want to know more about BMI?",
    trigger: "BMIKnowMore-options",
  },
  {
    id: "BMIKnowMore-options",
    options: [
      { value: "smartBMI", label: "Yes", trigger: "selectedService" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },
  {
    id: "funFact",
    component: <FunFact />,
    asMessage: true,
    trigger: "moreHelp",
  },
  {
    id: "end",
    message: "Thank you, see you again!",
    end: true,
  },
];

function BMI({ steps }) {
  return (
    <div>
      Your BMI is{" "}
      {(
        (steps.BMIWeight.value /
          (steps.BMIHeight.value * steps.BMIHeight.value)) *
        10000
      ).toFixed(2)}
    </div>
  );
}

function FunFact() {
  const randInt = Math.floor(Math.random() * 14);
  return <div>{funfacts[randInt]}</div>;
}

function Chatbot() {
  const [opened, setOpened] = useState(false);
  const [key, setKey] = useState(Math.random());
  const history = useHistory();
 

  const handleEnd = ({ steps, values }) => {
 console.log(steps);
 console.log(values);
   
 
    setTimeout(() => {
      setKey(Math.random());
      setOpened(false);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot
          key={key}
          steps={steps}
          speechSynthesis={{ enable: true, lang: 'en' }}
          recognitionEnable={true}
          handleEnd={handleEnd}
          opened={opened}
          headerTitle="CadVision Chat Bot assistant"
          botAvatar={chatboticon}
          avatarStyle={{ borderRadius: "100%" }}
          floating={true}
          cache={true}
          enableMobileAutoFocus={true}
          floatingIcon={
            <img
              src={chatboticon}
              style={{ width: "70%" }}
              alt="chatBot icon"
            />
          }
          enableSmoothScroll={true}
          floatingStyle={{
            backgroundColor: "#ffffff",
            width: "60px",
            boxShadow: "2px 2px 20px -8px #111",
          }}
         
        />
      </ThemeProvider>
    </div>
  );
}

export default Chatbot;