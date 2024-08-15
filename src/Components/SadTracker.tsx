import { FC } from "react"
import { sadCountSelector } from "../selector";
import { useSelector } from "react-redux";

type SadTrackerProps = {}

const SadTracker:FC<SadTrackerProps> = (props) => {
    const sadCount = useSelector(sadCountSelector)

    return (
        <h1 className="bg-red-500 px-4 py-2 text-white font-semibold">Sad Tracker count: {sadCount}</h1>
    );
}

export default SadTracker;
