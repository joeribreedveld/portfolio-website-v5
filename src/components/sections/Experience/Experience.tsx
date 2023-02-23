// Imports

// Functions
const Experience = () => {
  return (
    <section className="section-py flex flex-col gap-8">
      <section className="page-width">
        <h2>Experience</h2>
      </section>
      <section className="page-width flex gap-32">
        <section className="flex flex-col gap-6">
          <h3>Work</h3>
          <ul className="flex flex-col gap-6">
            <li className="flex flex-col gap-2">
              <p className="font-medium">CanvasHeroes</p>
              <p className="text-gray-500">November 2022 - March 2023</p>
              <p>Frontend Intern</p>
            </li>
            <li className="flex flex-col gap-2">
              <p className="font-medium">oorsprongsdocumenten.nl</p>
              <p className="text-gray-500">June 2022 - now</p>
              <p>Junior Full Stack Developer</p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-6">
          <h3>School</h3>
          <ul className="flex flex-col gap-6">
            <li className="flex flex-col gap-2">
              <p className="font-medium">Mediacollege Amsterdam</p>
              <p className="text-gray-500">September 2021 - June 2023</p>
              <p>MBO, Software Developer</p>
            </li>
            <li className="flex flex-col gap-2">
              <p className="font-medium">De Amsterdamse MAVO</p>
              <p className="text-gray-500">September 2017 - June 2021</p>
              <p>VMBO-T, cum laude</p>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

// Exports
export default Experience;