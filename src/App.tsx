import { useState } from "react";
import "./App.css";

//Create state
//Get data from server(fetch,useEffect)
//Map the data

function App() {
  const [images, setImages] = useState([]);

  function getImagesFromServer() {
    fetch("http://localhost:3000/images")
      .then((resp) => resp.json())
      .then((images) => setImages(images));
  }

  useState(() => {
    getImagesFromServer();
  }, []);

  return (
    <div className="App">
      {/* <!-- logo --> */}
      <img className="logo" src="assets/hoxtagram-logo.png" />

      <section className="image-container">
        {/* <!-- This is the HTML for each card. Use the following HTML as reference to build your React components --> */}
        {images.map((image) => (
          <article className="image-card">
            <h2 className="title">{image.title}</h2>
            <img src={image.image} className="image" />
            <div className="likes-section">
              <span className="likes">{image.likes}</span>
              <button className="like-button">♥</button>
            </div>
            <ul className="comments">
              <li>Get rid of these comments</li>
              <li>Get rid of these comments</li>
              <li>And replace them with the real ones</li>
              <li>From the server</li>
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
