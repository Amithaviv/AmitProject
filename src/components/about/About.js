import "./About.css";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="header">
          <div id="title">About Us</div>
          <Card border="light">
            <Card.Body>
              <Card.Text id="cardText">
                Our Bakery has the most delicious pastries, warm breads,
                stunning cakes and expertly brewed drinks while feeling right at
                home
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="https://t3.ftcdn.net/jpg/02/65/35/78/360_F_265357856_g6iX7VeKIPRllwT2STSf7RbVp7X26kcd.jpg"
            />
          </Card>
        </div>
      </header>
    </div>
  );
}
export default About;
