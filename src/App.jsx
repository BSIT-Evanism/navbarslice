import LocomotiveScroll from "locomotive-scroll";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { inView } from "motion";
import { useEffect, useState } from "react";

function App() {
  const [view, setInView] = useState(false);
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    inView(".scrollview", () => {
      setInView(true);
      return () => {
        setInView(false);
      };
    });
  }, [view]);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <div data-cursor-magnetic className="scrollview">
              block 1
            </div>
          </div>
          <div className="content ">block 2</div>
          <div className="content">block 3</div>
          <div className="content">block 4</div>
          <div className="content">block 5</div>
        </div>
      </div>
      <Title view={view} />
      <Navbar />
    </>
  );
}

export default App;
