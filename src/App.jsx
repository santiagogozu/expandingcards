import React, {useState} from "react";
import "./App.css";

function App() {
  const [isContainerActive1, setIsContainerActive1] = useState(false);
  const [isContainerActive2, setIsContainerActive2] = useState(false);
  const [isContainerActive3, setIsContainerActive3] = useState(false);
  const [isContainerActive4, setIsContainerActive4] = useState(false);
  const [isContainerActive5, setIsContainerActive5] = useState(false);

  const activePanel1 = () => {
    if (isContainerActive1 === false) {
      setIsContainerActive1(true);
    } else {
      setIsContainerActive1(false);
    }
    setIsContainerActive2(false);
    setIsContainerActive3(false);
    setIsContainerActive4(false);
    setIsContainerActive5(false);
  };

  const activePanel2 = () => {
    if (isContainerActive2 === false) {
      setIsContainerActive2(true);
    } else {
      setIsContainerActive2(false);
    }
    setIsContainerActive1(false);
    setIsContainerActive3(false);
    setIsContainerActive4(false);
    setIsContainerActive5(false);
  };

  const activePanel3 = () => {
    if (isContainerActive3 === false) {
      setIsContainerActive3(true);
    } else {
      setIsContainerActive3(false);
    }
    setIsContainerActive2(false);
    setIsContainerActive1(false);
    setIsContainerActive4(false);
    setIsContainerActive5(false);
  };

  const activePanel4 = () => {
    if (isContainerActive4 === false) {
      setIsContainerActive4(true);
    } else {
      setIsContainerActive4(false);
    }
    setIsContainerActive2(false);
    setIsContainerActive3(false);
    setIsContainerActive1(false);
    setIsContainerActive5(false);
  };

  const activePanel5 = () => {
    if (isContainerActive5 === false) {
      setIsContainerActive5(true);
    } else {
      setIsContainerActive5(false);
    }
    setIsContainerActive2(false);
    setIsContainerActive3(false);
    setIsContainerActive4(false);
    setIsContainerActive1(false);
  };

  return (
    <div className="container">
      <div
        className={`panel ${isContainerActive1 ? "active" : ""}`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
        }}
        onClick={activePanel1}
      >
        <h3>Explore The World</h3>
      </div>
      <div
        className={`panel ${isContainerActive2 ? "active" : ""}`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
        }}
        onClick={activePanel2}
      >
        <h3>Wild Forest</h3>
      </div>
      <div
        className={`panel ${isContainerActive3 ? "active" : ""}`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')`,
        }}
        onClick={activePanel3}
      >
        <h3>Sunny Beach</h3>
      </div>
      <div
        className={`panel ${isContainerActive4 ? "active" : ""}`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')`,
        }}
        onClick={activePanel4}
      >
        <h3>City on Winter</h3>
      </div>
      <div
        className={`panel ${isContainerActive5 ? "active" : ""}`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
        }}
        onClick={activePanel5}
      >
        <h3>Mountains - Clouds</h3>
      </div>
    </div>
  );
}

export default App;
