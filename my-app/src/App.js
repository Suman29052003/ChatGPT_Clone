import './App.css';
import menuBarIcon from "./menu.png"

function App() {
  return (
    <div className="App">

      {/* <--- Left Side ---> */}

<div className="resMenuIcon">
  <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/01-512.png" alt="" />
</div>

  <div className="leftSide">
<div className="logo">
  <img src="https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png" alt="" /><span>ChatGPT</span>
</div>
<div className="leftmid">
    <button><img src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png" alt="" /></button>
</div>
  </div>

  {/* <--- Right Side ---> */}

    <div className="rightSide">

    </div>
    </div>
  );
}

export default App;
