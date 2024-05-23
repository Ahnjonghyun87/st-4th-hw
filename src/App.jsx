import { useEffect, useState } from "react";
import TextInput from "./components/TextInput";

function App() {
  // TODO: 로컬 스토리지에서 초기 상태로 사용할 값을 가져오세요. 새로고침 해도 기존 상태를 유지하는 것이 목적입니다.
  // 로컬스토리지에 값이 없을 경우 빈배열[] 로 설정하세요.
  /*로컬스토리지에 있는 "text"를 getItem으로 가져온다.
  그럼 json.parse는 문자열(string)을 객체로 바꿔준다 그렇지 않으면 [](배열)로 반환함. */
  const [texts, setTexts] = useState(
    JSON.parse(localStorage.getItem("texts")) || []
  );

  useEffect(() => {
    // 상태가 변경될 때마다 로컬 스토리지에 저장합니다.
    // 초기 마운트 시에는 저장하지 않도록 합니다.
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <ul>
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
