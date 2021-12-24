import './Loading.css'
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading({ loading }) {
    const cls = ['loading-page'];

    if (loading) {
        cls.push('active')
    }

    return (
        <div className={cls.join(' ')}>
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