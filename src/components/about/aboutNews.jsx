import "./about.css";

import aboutImage from "../../assets/images/Logo & Others/Design White.png";
import N1 from "../../assets/images/News/With Box/N1.png";
import N2 from "../../assets/images/News/With Box/N2.png";
import N3 from "../../assets/images/News/With Box/N3.png";
import N4 from "../../assets/images/News/With Box/N4.png";
import N5 from "../../assets/images/News/With Box/N5.png";

const About = () => {
    return (
        <div id="about" className="about-section-wrapper">
            <div className="content-header-wrapper" style={{ paddingLeft: "150px", paddingTop: "100px", width: "100%" }}>
                <div className="content-header">About</div>
            </div>

            {/* image */}
            <img src={aboutImage} alt="about-image" className="centered-image" />

            {/* The Paragraph */}
            <div className="about-content-wrapper">
                <p className="">
                    Architecture is the learned game, correct and magnificent, of forms
                    assembled in the light. So keeping this in mind we started with our
                    work. We are a team of 5 Architects with a clean and white vision.
                </p>
                <a href="/" className="">
                    Read More +
                </a>
            </div>
        </div>
    );
};

const NewsCard = (props) => {
    return (
        <div className="news-detail-card">
            <img src={props.imagePath} alt="new-card-image" height={400} width={400} />

            <p>{props.description}</p>
            <p>{props.year}</p>
        </div>
    )
};

const News = () => {
    const newsData = [
        {
            imagePath: N1,
            description: "White Architectures work was mentioned as best in one of the spacious interior as well clean design in UNI - COS Magazine of the year 2020.",
            year: "20 Jan 2020",
        },
        {
            imagePath: N2,
            description: "White Architectures work was mentioned as best in one of the spacious interior as well clean design in UNI - COS Magazine of the year 2020.",
            year: "20 Jan 2020",
        },
        {
            imagePath: N3,
            description: "White Architectures work was mentioned as best in one of the spacious interior as well clean design in UNI - COS Magazine of the year 2020.",
            year: "20 Jan 2020",
        },
        {
            imagePath: N4,
            description: "White Architectures work was mentioned as best in one of the spacious interior as well clean design in UNI - COS Magazine of the year 2020.",
            year: "20 Jan 2020",
        },
        {
            imagePath: N5,
            description: "White Architectures work was mentioned as best in one of the spacious interior as well clean design in UNI - COS Magazine of the year 2020.",
            year: "20 Jan 2020",
        },
    ];

    return (
        <div id="news" className="news-container">
            <div className="content-header-wrapper">
                <div className="content-header">News</div>
            </div>

            <div className="news-data-container">
                {newsData.map((v) => NewsCard(v))}
            </div>
        </div>
    );
};

const AboutNews = () => {
    return (
        <section className="white-architecture-about-news-section">
            <About />
            <News />
        </section>
    );
};

export default AboutNews;
