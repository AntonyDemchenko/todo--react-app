import './Loading.css'
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
    return (
        <div className="loading-page">
            <PropagateLoader
                color={"#F8E71C"}
                // loading={true}
                size={40}
            // css={css`background-color : black`}
            />
        </div>
    )
};

export default Loading; 