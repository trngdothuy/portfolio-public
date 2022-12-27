import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

// import "./styles.css";

function Home() {
    const skills = ["html/css","javascript","react.js","node.js", "express","mongodb","react-native","git","ui/ux basics","python", "rust"];

    // const content = [
    //     {line: 1, text: "/**"},
    //     {line: 2, text: "** About me"},
    //     {line: 3, text: "* I am a Junior Full-stack Developer"},
    //     {line: 4, text: "*  with a Master’s degree, majoring in Digital"},
    //     {line: 5, text: "* Business."},
    //     {line: 6, text: "*"},
    //     {line: 7, text: "* I decided to switch my career path with"},
    //     {line: 8, text: "* serious consideration to courageously follow"},
    //     {line: 9, text: "*  my true passion. "},
    //     {line: 10, text: "*"},
    //     {line: 11, text: "*  I’ve joined and graduated from an intensive-9-"},
    //     {line: 12, text: "*  week Javascript bootcamp at Barcelona Code"},
    //     {line: 13, text: "*  School to extend my knowledge in the IT"},
    //     {line: 14, text: "*  industry and acquire important skills."},
    //     {line: 15, text: "*"},
    //     {line: 16, text: "*    I am willing to learn, improve and work hard"},
    //     {line: 17, text: "*    for   my job."}]

return (
    <>
    <div className="full-block">
        <div className="block-1">
            <div className="icon-column"> 
            {/* bright when hovering */}
                <p className="comment-text">icon</p>
                <p className="comment-text">icon</p>
                <p className="comment-text">icon</p>
            </div>
            <div className="personal-info-column">
                <div className="box-white-text">
                    &#9660; personal-info
                </div>
                <div className="box-white-text">
                    <div className="comment-text">
                        {/* pressable, change symbols, change color of text */}
                    &gt; bio
                    </div>
                    <div className="comment-text">
                    &gt; cv
                    </div>
                </div>
                <div className="box-white-text">
                    &#9660; skills
                </div>
                <div className="box-white-text-long">
                    <div>
                        {skills.map((skill, i) => {
                            return <div className="comment-text" key={i}>&gt;  {skill}</div>
                        })}
                    </div>
                </div>
                <div className="box-white-text">
                    &#9660; contacts
                </div>
                <div className="box-white-text-long">
                    <div className="comment-text">
                    trng.dt1@gmail.com
                    </div>
                </div>
            </div>
        </div>

        <div className="block-2-abtme">
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
                <table className="table-1">
                    <tr>
                        <td className="number-column">1</td>
                        <td className="text-column">/*</td>
                    </tr>
                    <tr>
                        <td className="number-column">2</td>
                        <td className="text-column"><b className="pink-text">** About me</b></td>
                    </tr>
                    <tr>
                        <td className="number-column">3</td>
                        <td className="text-column">* I am a <span className="purple-text">Junior Full-stack Developer</span>  with a</td>
                    </tr>
                    <tr>
                        <td className="number-column">4</td>
                        <td className="text-column">* Master’s degree, majoring in <i className="blue-text">Digital Business</i>.
</td>
                    </tr>
                    <tr>
                        <td className="number-column">5</td>
                        <td className="text-column">*  </td>
                    </tr>
                    <tr>
                        <td className="number-column">6</td>
                        <td className="text-column">* I decided to switch my career path with</td>
                    </tr>
                    <tr>
                        <td className="number-column">7</td>
                        <td className="text-column">* serious consideration to courageously follow</td>
                    </tr>
                    <tr>
                        <td className="number-column">8</td>
                        <td className="text-column">*  <i className="purple-text">my true passion</i>. </td>
                    </tr>
                    <tr>
                        <td className="number-column">9</td>
                        <td className="text-column">* </td>
                    </tr>
                    <tr>
                        <td className="number-column">10</td>
                        <td className="text-column">*  I’ve joined and graduated from an <span className="blue-text">intensive-9-</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">11</td>
                        <td className="text-column">*  <span className="blue-text">week Javascript bootcamp</span> at Barcelona Code</td>
                    </tr>
                    <tr>
                        <td className="number-column">12</td>
                        <td className="text-column">*  School to extend my knowledge in the IT</td>
                    </tr>
                    <tr>
                        <td className="number-column">13</td>
                        <td className="text-column">*  industry and acquire important skills.</td>
                    </tr>
                    <tr>
                        <td className="number-column">14</td>
                        <td className="text-column">*  </td>
                    </tr>
                    <tr>
                        <td className="number-column">15</td>
                        <td className="text-column">*    I am willing to <i className="purple-text">learn</i>, <i className="purple-text">improve</i> and <i className="purple-text">work hard</i></td>
                    </tr>
                    <tr>
                        <td className="number-column">16</td>
                        <td className="text-column">*    for   my job.</td>
                    </tr>
                    <tr>
                        <td className="number-column">18</td>
                        <td className="text-column">*/</td>
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

            <div className="main-body-abt-me-2">
                <></>
                <div>	&#160;&#160;&#160;// Code snippet showcase:</div>
                <div className="skill-card">
                    {/* first bar top */}
                    <div className="skill-card-top-bar">
                        {/* left side - name, photo */}
                        <div className="skill-card-top-left">
                            <img className="skill-img" src="https://media.licdn.com/dms/image/D4D03AQG7wjUg53Fl4w/profile-displayphoto-shrink_400_400/0/1670675482237?e=1677715200&v=beta&t=gFARcdXV3023F8gL1ItYcZ8NdKKKZu6urVQXCASQivk" alt="Trang"/>
                            <div className="skill-card-name-time"><b className="pink-text">@trngdothuy </b><span className="comment-text">created a month ago</span></div>
                        </div>

                    {/* right side - details, like */}
                        <div className="skill-card-top-right">
                            details
                            stars
                        </div>
                    </div>
                    

                    {/* body - main code */}
                    <div className="skill-card-code">
                        {/* color */}
                        <div> <span className="purple-text">function</span> <span className="blue-text">thisIsMySkills</span> <span className="purple-text">&#40;&#41; &#123; </span></div>
                          <div className="left-space"><span className="purple-text">const</span> <span className="yellow-text">passions</span> <span className="purple-text">= &#123;<span className="pink-text">'programming', 'technology', 'business', 'fashion'</span>&#125;;</span></div>
                          <div className="left-space">
                          <span className="purple-text">const</span> <span className="yellow-text">education</span> <span className="purple-text">= &#123;<span className="pink-text">'Barcelona Code School', 'EU Business School'</span>&#125;;</span></div>
                            <div className="left-space"><span className="purple-text">const</span> <span className="blue-text">result</span> <span className="yellow-text">= passions</span><span className="purple-text">.map&#40;<span className="pink-text">passion</span> &#61;&#62; <span className="pink-text">passion</span> * <span className="yellow-text">education</span>&#41;;</span></div>
                            <div className="left-space"><span className="purple-text">return <span className="blue-text">result</span>;</span></div>
                            <div><span className="purple-text">&#125;</span></div>
                            <p> </p>
                            <div className="comment-text">/* click "details" to see more */</div>
                    </div>
                    

                    {/* result showcase */}
                    <div className="skill-card-result">
                        {/* if yes => display, no => display none */}
                    {/* x button => display none (state) */}
                    <p> > After enthusiastically self-studying Python and Rust on my own, I've completed a JavaScript Bootcamp to sharpen my skills.</p>
                    <p> > Skills I possess: HTML, CSS, JavaScript, Node, Express, MongoDB, React.js, React Native, Git, UX/UI basics, Rust, Python and continue to be expanding</p>
                    <p> > Additionally, I believe my comprehension of Economy and Business can pave the way to have a wider view of digital solutions to help them grow both technically and profitably.</p>
                    </div>
                </div>


                {/* <table className="table-1">
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
                </table> */}
            </div>
        </div>
    </div></>
);
}

export default Home;



// let languagesSpoken = () => {
//     const motherTounge = "Vietnamese"
//     const earthLingo = {"English", "Spanish"}   
//     const lingua = earthLingo.reduce((total, value) => (total + value), motherTounge)
//     return lingua
// }