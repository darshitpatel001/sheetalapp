import React, { useRef, useState } from "react";
import audio from './audio/dummy audio.mp3.mp3'
import './audio.css'

export default function Audio() {
  const myBtn = useRef();
  const myAudio = useRef();

  const mydata = () => {
    if (!myBtn.current.classList.contains("slide")) {
      myBtn.current.classList.add("slide");
      myAudio.current.play();
    } else {
      myBtn.current.classList.remove("slide");
      myAudio.current.pause();
    }
  };
  return (
    <div>
      <header>
        <audio ref={myAudio} className="audio-container">
          <source src={audio} type="audio" />
        </audio>
<h1>Audio</h1>
        <button class="switch-btn " ref={myBtn} onClick={mydata}>
          <span>play</span>
          <span>pause</span>
          <span class="switch"></span>
        </button>
      </header>
    </div>
  );
}

