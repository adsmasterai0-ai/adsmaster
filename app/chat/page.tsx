"use client";

import Navbar from "../../components/dashboard/Navbar";
import ChatPanel from "../../components/dashboard/ChatPanel";
import AdGeneratorPanel from "../../components/dashboard/AdGeneratorPanel";
import FeedbackSection from "../../components/dashboard/FeedbackSection";

export default function ChatPage() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
   

      <div
        style={{
          flex: 1,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        
      <Navbar/>
    
<ChatPanel/>
<AdGeneratorPanel/>
<FeedbackSection/>
    
      </div>
    </div>
  );
}