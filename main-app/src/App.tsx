import UserList from "userList/UserList";
import Weather from "weather/Weather";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="content">
      <h1>Microfrontend Application</h1>
      <div className="modulesContainer">
        <UserList />
        <Weather />
      </div>
    </div>
  );
};

export default App;
