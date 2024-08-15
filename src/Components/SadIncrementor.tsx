import { FC } from "react";
import { useDispatch } from "react-redux";
import { SadButtonClicked } from "../action";


type SadIncreamentorProps = {};

const SadIncreamentor:FC<SadIncreamentorProps> = (props) => {
    const dispatch = useDispatch();
    const increment = ()=> {
        dispatch(SadButtonClicked)
    }
    return (
        <div>
            <h3 className="text-xl">Are you Sad?</h3>
            <button onClick={increment} type="button" className="bg-red-500 px-4 py-2 text-white rounded-md">Yes</button>
        </div>
    );
}

export default SadIncreamentor;