import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from './data.json';


class Main extends React.Component {
    render() {
        let arr = data.map((val, index) => {
            return (<HornedBeasts 
                key={index}
                title={val.title}
                image_url={val.image_url}
                description={val.description}
                keyword={val.keyword}
                horns={val.horns}/>);
        });
        return (
            <>
                {arr}
            </>
        )
    }
}
export default Main;
