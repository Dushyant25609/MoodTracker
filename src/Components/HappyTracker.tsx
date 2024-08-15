import { FC } from "react"
import { useSelector } from "react-redux";
import { happyCountSelector } from "../selector";

type HappyTrackerProps = {}

const HappyTracker:FC<HappyTrackerProps> = (props) => {
    const happyCount = useSelector(happyCountSelector)

    return (
        <h1 className="bg-green-500 px-4 py-2 text-white font-semibold">Happy Tracker count: {happyCount}</h1>
    );
}

export default HappyTracker;
