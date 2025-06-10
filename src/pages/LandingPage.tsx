
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const features = [
  {
    title: "Adaptive Assessments",
    description: "Customized tests that adapt to student's learning pace and abilities.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-primary"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    title: "Progress Tracking",
    description: "Monitor student performance over time with detailed analytics and insights.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-primary"
      >
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
  },
  {
    title: "Interactive Learning",
    description: "Engage students with gamified elements and interactive exercises.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-primary"
      >
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
];

export default function LandingPage() {
  const { isAuthenticated, currentUser } = useAuth();

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px-72px)]">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Learning Potential with Agile Learn
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform helps teachers evaluate and enhance students' learning speed through
                  adaptive assessments, detailed analytics, and personalized learning paths.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {isAuthenticated ? (
                  <Link to={currentUser?.role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard'}>
                    <Button size="lg" className="px-8">
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button size="lg" className="px-8">
                      Get Started
                    </Button>
                  </Link>
                )}
                <Link to="/about">
                  <Button size="lg" variant="outline" className="px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center">
              <img
                src="/home.jpg"
                width={550}
                height={400}
                alt="Hero Image"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Features that Empower Learning
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides powerful tools for teachers and students to optimize the learning process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="grid gap-2 bg-white p-6 shadow-lg rounded-lg">
                <div className="flex items-center justify-center rounded-lg mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center">{feature.title}</h3>
                <p className="text-gray-500 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Improve Learning Outcomes?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Agile Learn today and transform the way you teach and learn.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/login">
                <Button size="lg" className="px-8">
                  Start Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
