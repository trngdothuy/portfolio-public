import React from "react";

const Footer = () => {
return (
	<div className="footer">
        <div className="foot-1">
            <div className="nav-box">
                find me in:
            </div>
            <div className="nav-box">
                <a className="footer-a" href="https://www.linkedin.com/in/trang-do-thuy-183435141/">
                    linkedin
                    <img className="skill-card-icon" src="https://res.cloudinary.com/dm63jyidg/image/upload/v1672205072/portfolio/bkphuh4hnypgzfejicl9.png" alt="linkedin-icon"/>
                </a>
            </div>
            {/* <div className="nav-box">
                <a href="/">facebook</a>
            </div> */}
        </div>
            
        <div className="foot-2">
            <div className="nav-box">
                <a className="footer-a" href="https://github.com/trngdothuy">
                    @trngdothuy
                    <img className="skill-card-icon" src="https://res.cloudinary.com/dm63jyidg/image/upload/v1672204650/portfolio/sy2wu4ywcm5nu1iq7s2a.png" alt="git-icon"/>
                    </a>
            </div>
        </div>
	</div>
);
};
export default Footer;
