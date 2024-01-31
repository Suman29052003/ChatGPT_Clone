import './App.css';
import menuBarIcon from "./assets/menu.png"
import userImg from "./assets/userImg.jpg"
import gptImg from "./assets/ChatGPT-Logo.png"

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
        <div className="chats">
          <div className="chat">
            <img src={userImg} alt="" className="userImg"/><p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quas ea voluptates voluptas facere odio? Sequi assumenda similique incidunt quidem?</p>
          </div>
          <div className="chat bot">
            <img src={gptImg} alt="" className="gptImg" /><p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque minus amet fugit, et laborum voluptate reiciendis molestiae assumenda consequuntur nesciunt est nisi esse eaque error incidunt modi totam ad, cum magni iure facilis! Cum quibusdam ducimus consectetur exercitationem, a eligendi eius necessitatibus sit quas nesciunt eos minus, rerum ut recusandae quia ipsa. Aut minima distinctio expedita! Repudiandae nobis, sit animi dolores exercitationem delectus quasi numquam sequi doloribus distinctio iste esse doloremque, minima mollitia porro reiciendis illum. Facilis aperiam itaque facere mollitia veritatis error nesciunt molestias similique cupiditate pariatur saepe delectus, rerum reprehenderit dolores, dolorem nulla aliquam omnis a temporibus?</p>
          </div>
        </div>

        <div className="chatFooter">
          <div className="input">
            <input type="text" name="" id="" placeholder="Ask me Something ..." /> <button className="send"><i class='bx bx-send' ></i></button>
          </div>
        </div>
        <p className ="footerText">ChatGPT can make mistakes. Consider checking important information.</p>
      </div>
    </div>
  );
}

export default App;
