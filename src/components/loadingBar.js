import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function LoadingBar(props) {
    return (
        <SkeletonTheme color="#eee" highlightColor="#3E67EC">
            <Skeleton height={props.height} />
        </SkeletonTheme>
    )
}

export default LoadingBar;