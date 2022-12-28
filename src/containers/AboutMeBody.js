import React, { useState, useEffect } from "react";

function Home() {

    const [detailPressed, setDetailPressed] = useState(false);
    const [stars, setStars] = useState(0);
    const [detailPressed2, setDetailPressed2] = useState(false);
    const [stars2, setStars2] = useState(0);

    function handleDetailClick (e) {
        if (detailPressed === false) {
            setDetailPressed(true)
            // console.log('detail pressed')
        } else {
            setDetailPressed(false)
            // console.log('detail closed')
        }
    }

    function handleDetail2Click (e) {
        if (detailPressed2 === false) {
            setDetailPressed2(true)
            // console.log('detail 2  pressed')
        } else {
            setDetailPressed2(false)
            // console.log('detail 2 closed')
        }
    }

    function handleStarClick (e) {
        setStars(stars + 1)
        // console.log('star pressed', stars)
    }

    function handleStar2Click (e) {
        setStars2(stars2 + 1)
        // console.log('star 2 pressed', stars)
    }
    
return (
    <>
    <div className="full-block">
        <div className="block-2-abtme">
            <div className="first-row-body">
                <div className="box-first-row">
                    <span>personal-info</span> 
                    <span>x</span>
                </div>
            </div>
            <div className="main-body">
                <table className="table-1">
                    <tr>
                        <td className="number-column">1</td>
                        <td className="text-column">/*</td>
                    </tr>
                    <tr>
                        <td className="number-column">2</td>
                        <td className="text-column"><b><i className="pink-text-underlined">* About me:</i></b></td>
                    </tr>
                    <tr>
                        <td className="number-column">3</td>
                        <td className="text-column">*</td>
                    </tr>
                    <tr>
                        <td className="number-column">4</td>
                        <td className="text-column">* I am a <span className="purple-text">Junior Full-stack Developer</span>  with a</td>
                    </tr>
                    <tr>
                        <td className="number-column">5</td>
                        <td className="text-column">* Master’s degree, majoring in <i className="blue-text">Digital Business</i>.
</td>
                    </tr>
                    <tr>
                        <td className="number-column">6</td>
                        <td className="text-column">*  </td>
                    </tr>
                    <tr>
                        <td className="number-column">7</td>
                        <td className="text-column">* I decided to switch my career path with</td>
                    </tr>
                    <tr>
                        <td className="number-column">8</td>
                        <td className="text-column">* serious consideration to courageously follow</td>
                    </tr>
                    <tr>
                        <td className="number-column">9</td>
                        <td className="text-column">*  <i className="yellow-text">my true passion</i>. </td>
                    </tr>
                    <tr>
                        <td className="number-column">10</td>
                        <td className="text-column">* </td>
                    </tr>
                    <tr>
                        <td className="number-column">11</td>
                        <td className="text-column">*  I’ve joined and graduated from an <span className="blue-text">intensive-9-</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">12</td>
                        <td className="text-column">*  <span className="blue-text">week Javascript bootcamp</span> at Barcelona Code</td>
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
                        <td className="text-column">*  My happiness comes from  <span className="yellow-text">being creative and</span> </td>
                    </tr>
                    <tr>
                        <td className="number-column">17</td>
                        <td className="text-column">* <span className="yellow-text">innovative</span> to produce best performances </td>
                    </tr>
                    <tr>
                        <td className="number-column">18</td>
                        <td className="text-column">*  <i className="purple-text">beyond expectation</i>.</td>
                    </tr>
                    <tr>
                        <td className="number-column">19</td>
                        <td className="text-column">*</td>
                    </tr>
                    <tr>
                        <td className="number-column">20</td>
                        <td className="text-column">* I am willing to
                            <i className="pink-text"> learn</i>
                            ,
                            <i className="pink-text"> improve </i>
                            and
                            <i className="pink-text"> work hard</i>
                        </td>
                    </tr>
                    <tr>
                        <td className="number-column">21</td>
                        <td className="text-column">* for my job.
                        </td>
                    </tr>
                    <tr>
                        <td className="number-column">23</td>
                        <td className="text-column">*</td>
                    </tr>
                    <tr>
                        <td className="number-column">23</td>
                        <td className="text-column">*/</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="block-3-abtme">
            <div className="first-row-body">
                <div className="box-first-row">
                    <span>code-snippet</span> 
                    <span>x</span>
                </div>
            </div>

            <div className="main-body-abt-me-2">

                <i className="left-space">// Code snippet showcase:</i>
                <div className="skill-card">
                    {/* first bar top */}
                    <div className="skill-card-top-bar">
                        {/* left side - name, photo */}
                        <div className="skill-card-top-left">
                            <img className="skill-img" src="https://media.licdn.com/dms/image/D4D03AQG7wjUg53Fl4w/profile-displayphoto-shrink_400_400/0/1670675482237?e=1677715200&v=beta&t=gFARcdXV3023F8gL1ItYcZ8NdKKKZu6urVQXCASQivk" alt="Trang"/>
                            <div className="skill-card-name-time">
                                <b>
                                    <a className="pink-text" href="https://github.com/trngdothuy">
                                        @trngdothuy
                                    </a>
                                </b>
                                <span className="comment-text">created a month ago</span>
                            </div>
                        </div>

                    {/* right side - details, like */}
                        <div className="skill-card-top-right">
                            <div>
                                <button className="skill-card-btn" onClick={handleDetailClick}>
                                <img className="skill-card-icon" src="https://res.cloudinary.com/dm63jyidg/image/upload/v1672121354/portfolio/p4fyqxra0k8uxgzwe21s.png" alt="icon"/>
                                details</button>
                            </div>
                        <div>
                            <div>
                                <button 
                                className="skill-card-btn"
                                onClick={handleStarClick}>
                                    <img className="skill-card-icon" src="https://res.cloudinary.com/dm63jyidg/image/upload/v1672121354/portfolio/xr3d0khqlcctxna0t81i.png" alt="icon"/>
                                {stars} stars</button>
                            </div> 
                        </div>
                        </div>
                    </div>
                    

                    {/* body - main code */}
                    <div className="skill-card-code">
                        {/* color */}
                        <div> 
                            <span className="purple-text">function</span> <span className="blue-text">thisIsMySkills </span> 
                            <span className="purple-text">&#40;&#41; &#123; </span>
                        </div>
                        <div className="left-space">
                            <span className="purple-text">const</span> 
                            <span className="yellow-text"> passions</span> <span className="purple-text">= &#123;
                            <span className="pink-text">'programming', 'technology', 'business', 'fashion'</span>&#125;;</span>
                        </div>
                        <div className="left-space">
                          <span className="purple-text">const </span> 
                          <span className="yellow-text">education</span> <span className="purple-text">= &#123;
                          <span className="pink-text">'Barcelona Code School', 'EU Business School'</span>&#125;;
                          </span>
                        </div>
                        <div className="left-space">
                            <span className="purple-text">const </span> 
                            <span className="blue-text">result</span> 
                            <span className="yellow-text">= passions</span>
                            <span className="purple-text">.map&#40;
                            <span className="pink-text">passion</span> &#61;&#62; 
                            <span className="pink-text"> passion </span> 
                            * 
                            <span className="yellow-text"> education</span>&#41;;
                            </span>
                        </div>
                        <div className="left-space">
                            <span className="purple-text">
                            return 
                            <span className="blue-text"> result</span>;
                            </span>
                        </div>
                        <div>
                            <span className="purple-text">&#125;</span>
                        </div>
                            <p> </p>
                        <div className="comment-text">/* click "details" to see more */</div>
                    </div>
                    

                    {/* result showcase */}
                    {detailPressed &&
                    <div className="skill-card-result">
                        {/* if yes => display, no => display none */}
                        <div className="skill-card-result-content">
                            <p> 
                                &#62; I have figured out my future path - growing myself as  
                                <b className="blue-text"> a well-experienced developer</b>
                                . 
                            </p>
                            <p> 
                                &#62; After enthusiastically self-studying 
                                <span className="purple-text"> Python </span>
                                and 
                                <span className="purple-text"> Rust </span> 
                                on my own, I've completed 
                                <span className="purple-text"> a JavaScript Bootcamp </span> 
                                to sharpen my skills.
                            </p>
                            <div> 
                                &#62; Skills I possess: 
                                <b className="yellow-text"> HTML, CSS, JavaScript, Node, Express, MongoDB, React.js, React Native, Git, UX/UI basics, Rust, Python </b> 
                                and continue to be expanding.
                            </div>
                            
                        </div>
                        
                        {/* x button => display none (state) */}
                        <div>
                            <button 
                            className="skill-card-btn"
                            onClick={handleDetailClick}>x</button>
                        </div> 

                    </div>
                    }
                </div>
                
                {/* the second card */}

                <div className="skill-card">
                    {/* first bar top */}
                    <div className="skill-card-top-bar">
                        {/* left side - name, photo */}
                        <div className="skill-card-top-left">
                            <img className="skill-img" src="https://media.licdn.com/dms/image/D4D03AQG7wjUg53Fl4w/profile-displayphoto-shrink_400_400/0/1670675482237?e=1677715200&v=beta&t=gFARcdXV3023F8gL1ItYcZ8NdKKKZu6urVQXCASQivk" alt="Trang"/>
                            <div className="skill-card-name-time">
                                <b>
                                    <a className="pink-text" href="https://github.com/trngdothuy">
                                        @trngdothuy
                                    </a>
                                </b>
                                <span className="comment-text">created 2 months ago</span>
                            </div>
                        </div>

                    {/* right side - details, like */}
                        <div className="skill-card-top-right">
                            <div>
                                <button className="skill-card-btn" onClick={handleDetail2Click}>
                                <img className="skill-card-icon" src="https://res.cloudinary.com/dm63jyidg/image/upload/v1672121354/portfolio/p4fyqxra0k8uxgzwe21s.png" alt="icon"/>
                                details</button>
                            </div>
                        <div>
                            <div>
                                <button 
                                className="skill-card-btn"
                                onClick={handleStar2Click}>
                                    <img className="skill-card-icon" src="https://res.cloudinary.com/dm63jyidg/image/upload/v1672121354/portfolio/xr3d0khqlcctxna0t81i.png" alt="icon"/>
                                    {stars2} stars
                                </button>
                            </div> 
                        </div>
                        </div>
                    </div>
                    

                    {/* body - main code */}
                    <div className="skill-card-code">
                        {/* color */}
                        <div> 
                            <span className="purple-text">let</span> 
                            <span className="blue-text"> languagesSpoken</span> 
                            <span className="purple-text"> = &#40;&#41; &#61;&#62; &#123; </span>
                        </div>
                        <div className="left-space">
                            <span className="purple-text">const</span> 
                            <span className="yellow-text"> motherTounge </span> 
                            <span className="purple-text">
                                = 
                                <span className="pink-text"> "Vietnamese"</span>;
                            </span>
                        </div>
                        <div className="left-space">
                          <span className="purple-text">const</span> 
                          <span className="yellow-text"> earthLingo </span> 
                          <span className="purple-text">
                            = &#123;
                            <span className="pink-text">"English", "Spanish"</span>
                            &#125;;
                            </span>
                        </div>
                        <div className="left-space">
                            <span className="purple-text">const </span> 
                            <span className="blue-text">result </span> 
                            <span className="yellow-text">= earthLingo</span>
                            <span className="purple-text">
                                .reduce&#40;&#40;
                                <span className="pink-text">total, value</span>
                                &#41; &#61;&#62; &#40;
                                <span className="pink-text">total</span>
                                + 
                                <span className="pink-text">value</span>
                                &#41;, 
                                <span className="yellow-text">education</span>&#41;;
                            </span>
                        </div>
                        <div className="left-space">
                             <span className="purple-text">
                                return 
                                <span className="blue-text"> result</span>
                                ;
                            </span>
                         </div>
                        <div>
                             <span className="purple-text">&#125;;</span>
                        </div>
                        <p></p>
                        <div>
                            <span className="purple-text">var</span> 
                            <span className="green-text"> Trang </span> 
                            <span className="purple-text">&#61; new </span> 
                            <span className="yellow-text">Programmer</span> 
                            <span className="purple-text">
                                (
                                <span className="blue-text">languagesSpoken</span>)
                            </span> 
                        </div>
                        <div className="left-space">
                            <span className="purple-text">
                                &#123;
                                <span className="orange-text">keywords</span>
                                &#58; &#123;
                                <span className="pink-text">
                                    "front- end", "back-end",
                                </span>
                            </span>
                            <div className="left-space-2">
                                <span className="pink-text">  "full-stack", "programmer"</span>
                                <span className="purple-text">&#125;,</span>  
                            </div>
                        </div>
                        <div className="left-space">
                            <span className="orange-text">languages</span> 
                            <span className="purple-text">&#58; </span>
                            <span className="blue-text">languagesSpoken</span>
                            <span className="purple-text">&#125;; </span>
                        </div>
                        <p> </p>
                        <div className="comment-text">/* click "details" to see more */</div>
                    </div>
                    

                    {/* result showcase */}
                    {detailPressed2 &&
                    <div className="skill-card-result">
                        {/* if yes => display, no => display none */}
                        <div className="skill-card-result-content">
                            <p> 
                                &#62; I speak 
                                <b className="blue-text"> English (proficiency)</b>
                                , 
                                <b className="blue-text"> Spanish (basic)</b>
                                , and
                                <b className="blue-text"> Vietnamese (native)</b>
                                .
                            </p>
                            <p> 
                                &#62;  Equipped with previous experiences, especially in 
                                <b className="yellow-text"> Customer Service </b>
                                 and 
                                <b className="yellow-text"> Digital Marketing</b>
                                , I've been able to sharpen my personality with <i className="purple-text">consistency</i>, <i className="purple-text">prudence</i>, and <i className="purple-text">enthusiasm</i>.
                            </p>
                            <p> 
                                &#62; Additionally, I believe my comprehension of 
                                <b className="yellow-text"> Economy </b>
                                and 
                                <b className="yellow-text"> Business </b>
                                can pave the way to have a wider view of digital solutions to help them grow both 
                                <i className="orange-text"> technically & profitably</i>.
                            </p>
                        </div>
                        
                        {/* x button => display none (state) */}
                        <div>
                            <button 
                            className="skill-card-btn"
                            onClick={handleDetail2Click}>x</button>
                        </div> 
                        
                    </div>
                    }
                    
                </div>
            </div>
        </div>
    </div></>
);
}

export default Home;

