import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Routes from "./routes";
import { getCurrentUser } from "./store/actions/auth";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCurrentUser());
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
