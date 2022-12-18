import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

// import "./styles.css";

function Home() {

return (
    <>
    <div className="full-block">
        <div class="block-1">
            <div className="icon-column"> 
            {/* bright when hovering */}
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
            </div>
            <div className="personal-info-column">
                <div className="box-white-text">
                    &#9660; personal-info
                </div>
                <div className="box-white-text">
                    <div>
                        {/* pressable, change symbols, change color of text */}
                    &gt; bio
                    </div>
                    <div>
                    &gt; cv
                    </div>
                </div>
                <div className="box-white-text">
                    &#9660; contacts
                </div>
                <div className="box-white-text-long">
                    <div>
                    trng.dt1@gmail.com
                    </div>
                    <div>
                    +34 632486338
                    </div>
                </div>
            </div>
        </div>

        <div class="block-2-abtme">
            <div className="first-row-body">
                <div className="box-first-row">
                    <span>personal-info</span> 
                    <span>x</span>
                </div>
            </div>
            <div className="main-body">
                {/* <div className="column-number">
                    <span>1</span>
                    <span>2</span>
                </div> */}
                <table>
                    {/* <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr> */}
                    <tr>
                        <td className="number-column">1</td>
                        <td className="text-column">/**</td>
                    </tr>
                    <tr>
                        <td className="number-column">2</td>
                        <td className="text-column">** About me</td>
                    </tr>
                    <tr>
                        <td className="number-column">3</td>
                        <td className="text-column">* I am a Junior Full-stack Developer</td>
                    </tr>
                    <tr>
                        <td className="number-column">4</td>
                        <td className="text-column">*  with a Master’s degree, majoring in Digital 
</td>
                    </tr>
                    <tr>
                        <td className="number-column">5</td>
                        <td className="text-column">* Business. </td>
                    </tr>
                    <tr>
                        <td className="number-column">6</td>
                        <td className="text-column">*  </td>
                    </tr>
                    <tr>
                        <td className="number-column">7</td>
                        <td className="text-column">* I decided to switch my career path with serious</td>
                    </tr>
                    <tr>
                        <td className="number-column">8</td>
                        <td className="text-column">* consideration to courageously follow my true</td>
                    </tr>
                    <tr>
                        <td className="number-column">9</td>
                        <td className="text-column">* passion. </td>
                    </tr>
                    <tr>
                        <td className="number-column">10</td>
                        <td className="text-column">* </td>
                    </tr>
                    <tr>
                        <td className="number-column">11</td>
                        <td className="text-column">*  I’ve joined and graduated from an intensive-9-</td>
                    </tr>
                    <tr>
                        <td className="number-column">12</td>
                        <td className="text-column">*  week Javascript bootcamp at Barcelona Code</td>
                    </tr>
                    <tr>
                        <td className="number-column">13</td>
                        <td className="text-column">*  School to extend my knowledge in the IT</td>
                    </tr>
                    <tr>
                        <td className="number-column">14</td>
                        <td className="text-column">*  industry and acquire important skills.</td>
                    </tr>
                    <tr>
                        <td className="number-column">15</td>
                        <td className="text-column">*  </td>
                    </tr>
                    <tr>
                        <td className="number-column">16</td>
                        <td className="text-column">*    I am willing to learn, improve and work hard for </td>
                    </tr>
                    <tr>
                        <td className="number-column">17</td>
                        <td className="text-column">*     my job.</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="block-3-abtme">
            <div className="first-row-body">
                <div className="box-first-row">
                    <span>skills</span> 
                    <span>x</span>
                </div>
            </div>
            <div className="main-body">
                <table>
                    <tr>
                        <td className="number-column">1</td>
                        <td className="text-column">/**</td>
                    </tr>
                    <tr>
                        <td className="number-column">2</td>
                        <td className="text-column">** Skills</td>
                    </tr>
                    <tr>
                        <td className="number-column">3</td>
                        <td className="text-column">* &gt; JavaScript</td>
                    </tr>
                    <tr>
                        <td className="number-column">4</td>
                        <td className="text-column">* &gt; React.js</td>
                    </tr>
                    <tr>
                        <td className="number-column">5</td>
                        <td className="text-column">* &gt; React Native</td>
                    </tr>
                    <tr>
                        <td className="number-column">6</td>
                        <td className="text-column">* &gt; Node.js</td>
                    </tr>
                    <tr>
                        <td className="number-column">7</td>
                        <td className="text-column">* &gt; Express</td>
                    </tr>
                    <tr>
                        <td className="number-column">8</td>
                        <td className="text-column">* &gt; MongoDB</td>
                    </tr>
                    <tr>
                        <td className="number-column">9</td>
                        <td className="text-column">* &gt; HTML5/CSS3</td>
                    </tr>
                    <tr>
                        <td className="number-column">10</td>
                        <td className="text-column">* &gt; Python</td>
                    </tr>
                    <tr>
                        <td className="number-column">11</td>
                        <td className="text-column">* &gt; Rust</td>
                    </tr>
                    <tr>
                        <td className="number-column">12</td>
                        <td className="text-column">*  </td>
                    </tr>
                    <tr>
                        <td className="number-column">13</td>
                        <td className="text-column">** Languages</td>
                    </tr>
                    <tr>
                        <td className="number-column">14</td>
                        <td className="text-column">* &gt; English - Advanced </td>
                    </tr>
                    <tr>
                        <td className="number-column">15</td>
                        <td className="text-column">* &gt; Spanish - Basic </td>
                    </tr>
                    <tr>
                        <td className="number-column">16</td>
                        <td className="text-column">* &gt; Vietnamese - Native </td>
                    </tr>
                </table>
            </div>
        </div>
    </div></>
);
}

export default Home;
