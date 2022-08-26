import React from "react";
import {scp4Data} from '../../scp4'

export const Scp4 = () => {
    return (
        <div>
            {/*<br/> <h1>&nbsp; Title: SCP-002 - SCP Foundation </h1>*/}
            <div className="container">
                {scp4Data.map((data, key) => {
                    return (
                        <div key={key}>
                            <h1> Item #: {data.item} </h1> &nbsp;
                            <h1> Object Class: {data.object_class} </h1> <br/>
                            {/*<img src={data.img}  alt="img"> </img> <br/>*/}
                            <h1> Special Containment Procedures: </h1><br/> <p> {data.procedures}</p> <br/>
                            <h1> Description: </h1> <br/> <p> {data.description} </p> <br/>
                            <h1> Chronological History: </h1> <br/> <p> {data.history} </p> <br/>
                            <h1> Space-Time Anomalies: </h1> <br/> <p> {data.anomalies} </p> <br/>
                            <h1> Additional: </h1> <br/> <p> {data.notes} </p> <br/>
                            <h1> Appendix A: Mental Health Effects of SCP-004-12: </h1> <br/> <p> {data.appendixa} </p> <br/>
                            <h1> Appendix B: Additional Information: </h1> <br/> <p> </p> <br/>
                            <h1> Item #:  </h1> <br/> <p> {data.itema} </p> <br/>
                            <h1>  </h1> <br/> <p> {data.other} </p> <br/>
                            <h1> Reference: </h1> <br/> <p>  {data.reference} </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
