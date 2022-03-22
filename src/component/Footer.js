import githubimg from "../images/github-sign.png";
import linkedinimg from "../images/linkedin (1).png";
import twitterimg from "../images/twitter-sign.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div>
        <h3>Made by Pooja Vishnoi</h3>
      </div>
      <div className="footer_icons">
        <a href="https://github.com/poojavishnoi/" target="_blank" rel="noreferrer">
          <img src={githubimg} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/pooja-vishnoi-678873206/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinimg} alt="" />
        </a>
        <a href="https://twitter.com/PoojaVishnoi29" target="_blank" rel="noreferrer">
          <img src={twitterimg} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
