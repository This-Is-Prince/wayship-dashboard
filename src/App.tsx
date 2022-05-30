import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/content/Content";
import Home from "./components/content/home/Home";
import Header from "./components/header/Header";
import Aside from "./components/sidebar/Aside";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Aside />
        <Header />
      </>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="workspace" element={<section>Workspace</section>} />
          <Route path="marpol" element={<section>marpol</section>} />
          <Route path="oh&s" element={<section>oh&s</section>} />
          <Route path="insights" element={<section>insights</section>} />
          <Route path="history" element={<section>history</section>} />
          <Route path="apps" element={<section>apps</section>} />
          <Route path="settings" element={<section>settings</section>} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
};

export default App;
