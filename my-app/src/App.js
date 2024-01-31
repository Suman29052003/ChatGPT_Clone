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
          <button><i class='bx bx-plus'></i>New Chat</button>
        </div>
<div className="borderline">
  
</div>
        <div className="leftFooter">
          <div className="premium footerflex">
            <i class='bx bx-purchase-tag-alt green'></i><span> Premium Subscription</span>
          </div>
          <div className="user footerflex">
            <i class='bx bx-child green'></i><span> User Account</span>
          </div>
        </div>
      </div>

      {/* <--- Right Side ---> */}

      <div className="rightSide">
        <div className="rightHeading">
          <h3>ChatGPT <span>6.9</span><i class='bx bx-chevron-down' ></i></h3>
        </div>
        <div className="chatArea">
          <div className="userInputBox">
            <input type="text" placeholder="Type a message..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
