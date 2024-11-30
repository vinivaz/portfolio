// Assets
import return_icon from "/return.svg";

// Styles
import "./Navbar.css"

//Hooks
import { useSelector, useDispatch } from "react-redux";

// Redux
import { setVisualizingPost } from "../../../../state/post/postSlice";
import { setPage } from "../../../../state/app/appSlice";

const Navbar = () => {
  const {visualizingPost} = useSelector(state => state.post);
  const { studio_pop } = useSelector(state => state.app.apps)

  const dispatch = useDispatch();


  return (
    <nav className="nav-bar">
      <img
        // src="https://i.ibb.co/ZLh3w4c/54695-C6-C-A1-AA-4375-9-D90-44-F9-B53-D459-B.png"
        src="/studio/Studio_pop_logo.png"
        alt="54695-C6-C-A1-AA-4375-9-D90-44-F9-B53-D459-B"
        border="0"
        onClick={() => dispatch(setPage({
          name: "studio_pop",
          page: "home"

        }))}
      />

      <div className="navigation-opts">
        {studio_pop.page && studio_pop.page == "post" && 
          <button
            className="return"
            onClick={() => dispatch(setPage({
              name: "studio_pop",
              page: "studio"

            }))}
          >
            Return
          </button>
        }
      </div>
    </nav>
  )
}

export default Navbar