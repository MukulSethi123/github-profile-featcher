import React from "react";
import { useState } from "react";
import Card from "./Card";
import './list.css';


function List({profileList}){
    const [key,setKey]= useState(0)
        return (            
                    <div className="List-body">
                        {
                            profileList.map((currentProfile) =>{
                                return <Card profileObj={currentProfile} key={currentProfile.key}/>
                            })  
                        }
                    </div>
        )
}

export default List;