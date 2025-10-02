import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"

function App() {

  const {
    transcript,
    listening,
    // isMicrophoneAvailable,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  const buttonLabel = listening ? "停止" : "開始"

  const onClick = e => {
    if (listening) {
      SpeechRecognition.stopListening()
    } else {
      SpeechRecognition.startListening({ continuous: true, language: "ja-JP" })
    }
  }

  return (
    <main>
      <header>
        <h1>
          音声入力テスト
        </h1>
      {!browserSupportsSpeechRecognition &&
        <h1>このブラウザは音声入力に対応してません</h1>
      }
      </header>
      {
        browserSupportsSpeechRecognition &&
        <>
          <textarea value={transcript} onChange={() => {}}></textarea>
          <button onClick={onClick}>音声入力{buttonLabel}</button>
        </>
      }
    </main>
  )
}

export default App
