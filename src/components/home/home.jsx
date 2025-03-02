
import "./home.css";
import homeImage from "../../assets/images/Projects Images/P1.jpg"; // Import the image

const Home = () => {
    return (
        <section id="projects" className="home-section">
            {/* border line */}
            <div className="home-border-line">
                <div style={{
                    border: "solid 1px white",
                    width: "100%"
                }} ></div>
            </div>
            <div className="home-content-section">
                <h2>
                    Sharp & Beautiful <br /> The Edge Building
                </h2>
                <p style={{ textAlign: "start"}}>Madrid, Spain</p>
            </div>
            <div>
                <div className="home-image corner-lines">
                    {/* Fit the image logo */}
                    <img
                        src={homeImage}
                        alt="The Edge Building"
                        height={50}
                        width={50}
                    />
                </div>
            </div>

            {/* 1/5 */}
            <div>
                <span className="text-white">1</span> / 5
            </div>
        </section>
    );
}

export default Home;