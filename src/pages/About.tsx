import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
        At <span className="text-primary font-semibold">Agile Learn</span>, we're on a mission to help schools and educators unlock their students' true potential through modern, data-driven learning tools.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Allow schools and teachers to <span className="text-foreground font-medium">enroll and manage students</span>.</li>
        <li>Enable students to <span className="text-foreground font-medium">take personalized tests</span> that build learning agility.</li>
        <li>Track performance in real-time through <span className="text-foreground font-medium">progress dashboards</span>.</li>
        <li>Enhance learning outcomes with <span className="text-foreground font-medium">adaptive tools and feedback</span>.</li>
      </ul>

      <p className="mt-6 text-lg text-muted-foreground">
        We're building a smarter way to learn — not by memorizing more, but by learning how to adapt, think critically, and grow faster.
      </p>

      <p className="mt-6 font-medium text-foreground">
        Join us in shaping the future of education.
      </p>

      <div className="mt-10 flex gap-6 justify-center">
        <Link to="/" className="text-primary font-medium underline underline-offset-4 hover:text-primary/80">
          Home
        </Link>
        <Link to="/contact" className="text-primary font-medium underline underline-offset-4 hover:text-primary/80">
          Contact
        </Link>
      </div>
    </div>
  );
}
