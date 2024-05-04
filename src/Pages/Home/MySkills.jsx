import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Work Experience</h2>
      </div>
      <div className="skills--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.company}</h3>
              <p className="skills--section--description">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Education</h2>
      </div>
      <div className="skills--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.degree}</h3>
              <p className="skills--section--description">{item.school}</p>
              <p className="skills--section--description">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}