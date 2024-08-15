import { FC } from "react";
import { useDispatch } from "react-redux";
import { HappyButtonClicked } from "../action";


type HappyIncreamentorProps = {};

const HappyIncreamentor:FC<HappyIncreamentorProps> = (props) => {
    const dispatch = useDispatch();
    const increment = ()=> {
        dispatch(HappyButtonClicked)
    }
    return (
        <div>
            <h3 className="text-xl">Are you Happy?</h3>
            <button onClick={increment} type="button" className="bg-green-500 px-4 py-2 text-white rounded-md">Yes</button>
        </div>
    );
}

export default HappyIncreamentor;