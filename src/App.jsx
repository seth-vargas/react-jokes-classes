// import React from "react";
// import JokeList from "./JokeList";

// function App() {
//   return (
//     <div className="App">
//       <JokeList />
//     </div>
//   );
// }

// export default App;

import React from "react";
import JokeList from "./JokeList.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <JokeList numJokesToGet={10} />
      </div>
    );
  }
}

export default App;
