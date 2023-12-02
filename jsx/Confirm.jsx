import '../css/Confirm.css';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
function Confirm() {
  
  return (
    <>
      <div>
        <Link to="/" style={{ marginLeft: "10px" }}>
          <ArrowBackIcon />
        </Link>
      </div>
      <div  className="allcodepen">
        <div></div>

        <aside class="profile-card">
          <header>
            <a target="_blank" href="#">
              <img
                src="http://lorempixel.com/150/150/people/"
                class="hoverZoomLink"
              />
            </a>

            <h1 id="h1">Booking Confirmed</h1>

            <h2 id="h2">Thanks for Your Booking with us</h2>
          </header>

          <div class="profile-bio">
            <p>
              We received your payment successfully. Now we will send your booked details to your coresponding mail id.
            </p><br></br>
              <Button id="last"><Link to="/home"  style={{textDecoration:"none"}} >Go Home</Link></Button>
          </div>

          <ul class="profile-social-links">
            <li>
              <a target="_blank" href="https://www.facebook.com/creativedonut">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/dropyourbass">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/vipulsaxena">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.behance.net/vipulsaxena">
                <i class="fa fa-behance"></i>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
export default Confirm;