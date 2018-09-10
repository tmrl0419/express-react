import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="아이디 입력" id="userid" name="userid" /><br/>
                <input type="password" id="password" name="password" />
            </div>
        );
    }
}

export default About;