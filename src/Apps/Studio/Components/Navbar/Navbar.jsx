// Assets
import return_icon from "/return.svg";

// Styles
import "./Navbar.css"

//Hooks
import { useSelector, useDispatch } from "react-redux";

// Redux
import { setVisualizingPost } from "../../../../state/post/postSlice";

const Navbar = () => {
  const {visualizingPost} = useSelector(state => state.post);

  const dispatch = useDispatch();


  return (
    <nav className="nav-bar">
      <img
        src="https://i.ibb.co/ZLh3w4c/54695-C6-C-A1-AA-4375-9-D90-44-F9-B53-D459-B.png"
        alt="54695-C6-C-A1-AA-4375-9-D90-44-F9-B53-D459-B"
        border="0"
      />

      <div className="navigation-opts">
        {visualizingPost && 
          <button
            className="return"
            onClick={() => dispatch(setVisualizingPost(!visualizingPost))}
          >
            Return
          </button>
        }
      </div>
    </nav>
  )
}

export default Navbar