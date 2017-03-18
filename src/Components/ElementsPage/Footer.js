import React from 'react';
import './Footer.css';


class Footer extends React.Component {

    render() {
        return(
            <div className="app-footer">

                <h5><strong> Transport Gdańska </strong></h5>
                <ul>
                    <li><a href="" title="" target="blank">nasz zespół</a></li>
                    <li><a href="" title="" target="blank">repozytoriom</a></li>
                    <li><a href="" title="" target="blank">iSAcademy</a></li>
                </ul>
                <p><small>Gdańsk 2017</small></p>
            </div>
        );
    }
}
export default Footer;