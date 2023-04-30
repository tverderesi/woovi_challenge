import { JourneyIcon } from "./Journey";

export function About() {
  return (
    <section
      className="pt-24 pb-12 snap-center snap-always h-screen w-screen flex flex-col lg:flex-row items-center lg:justify-around"
      id="about"
    >
      <div className="w-full h-2/5 lg:w-2/5 lg:h-4/5 m-auto lg:m-0">
        <JourneyIcon />
      </div>
      <div className="w-full lg:w-2/5 px-8 lg:p-16 flex flex-col items-center justify-center">
        <h1 className="w-full text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4">
          About Florestarefa
        </h1>
        <p className="w-full lg:text-xl leading-relaxed text-center lg:text-left">
          <strong>Florestarefa</strong> is a student-friendly progressive web
          application (PWA) with gamified elements that doubles as a learning
          management system (LMS) for school staff. The goal of the project is
          to provide a fun and engaging learning experience for students, while
          also providing a comprehensive and organized platform for teachers to
          manage their classes and assignments.
        </p>
      </div>
    </section>
  );
}