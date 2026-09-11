import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Machine Learning Intern</h4>
                <h5>IICT | AI/ML Track</h5>
              </div>
              <h3>6 WEEKS</h3>
            </div>
            <p>
              Gained practical experience in AI concepts, Python, data
              preprocessing, model development, and evaluation through applied
              AI/ML projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>V2V EdTech LLP | Python Specialization</h5>
              </div>
              <h3>6 WEEKS</h3>
            </div>
            <p>
              Processed 50,000+ records, analyzed 5+ datasets, created 15+
              dashboards, and automated workflows that reduced analysis time
              by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science & Engineering</h4>
                <h5>MIT ADT University, Pune</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Second-year student specializing in Data Science, Software
              Engineering, and Database Systems. Current CGPA: 8.66.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
