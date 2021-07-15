import React, { useEffect } from "react";

const Component1 = (props) => {
    const onPlus = (value) => {
        props.callback(value);
    };
    // const onMinus = () => {
    //     props.callback(1);
    // };
    // useEffect(() => {
    //     setTimeout(() => {
    //         props.callback('update2222');
    //     }, 3000);
    // }, []);
    return (
        <div>Component {props.name}
            <button onClick={() => onPlus(1)}>Plus</button>
            <button onClick={() => onPlus(-1)}>Minus</button>
        </div>
    );
};

export default Component1;