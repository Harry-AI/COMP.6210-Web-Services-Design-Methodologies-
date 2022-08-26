import React from "react";
import {scp3Data} from '../../scp3'

export const Scp3 = () => {
    return (
        <div>
            {/*<br/> <h1>&nbsp; Title: SCP-002 - SCP Foundation </h1>*/}
            <div className="container">
                {scp3Data.map((data, key) => {
                    return (
                        <div key={key}>
                            <h1> Item #: {data.item} </h1> &nbsp;
                            <h1> Object Class: {data.object_class} </h1> <br/>
                            {/*<img src={data.img}  alt="img"> </img> <br/>*/}
                            <h1> Special Containment Procedures: </h1><br/> <p> {data.procedures}</p> <br/>
                            <h1> Description: </h1> <br/> <p> {data.description} </p> <br/>
                            <h1>Reference: </h1> <br/> <p>  {data.reference} </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
