import Image from "next/image";
import { socialLinks } from "./config";
import Link from 'next/link';

export default function Page() {
  return (
    <section className="bg-gray-50 py-12">
  <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
    {/* Top Skills Section */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">Top Skills</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {[
          "Android Development",
          "Android Jetpack",
          "Kotlin",
          "Java",
          "iOS Development",
          "Swift",
          "SwiftUI",
          "Flutter",
          "React Native",
          "Node.js",
          "Laravel",
          "Next.js",
          "Kubernetes (k8s)",
          "CI/CD Pipelines",
          "RESTful APIs",
          "GraphQL",
          "MVVM Architecture",
          "MVP Architecture",
          "Agile Methodologies",
          "Cloud Infrastructure (AWS, GCP)",
          "Automation Scripting (Bash, Node.js)",
          "UI/UX Collaboration",
          "Code Optimization",
          "Unit & UI Testing",
          "Secure Authentication",
          "Data Encryption",
        ].map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-sm text-blue-700 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Experience Section */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">Experience</h2>

      {/* KoinWorks */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">KoinWorks</h3>
        <p className="text-gray-600 text-sm">5 years 10 months</p>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
            <div>
              <p className="font-medium">DevOps Engineer (Sep 2024 - Dec 2024)</p>
              <ul className="list-disc pl-6 text-sm text-gray-600">
                <li>Implemented CI/CD pipelines using GitLab CI for seamless deployments.</li>
                <li>Managed Kubernetes clusters to ensure scalable and reliable microservices deployment.</li>
                <li>Optimized cloud infrastructure costs on AWS and GCP, achieving a 20% reduction in monthly expenses.</li>
                <li>Developed automation scripts using Node.js and Bash to streamline DevOps processes.</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
            <div>
              <p className="font-medium">Associate Engineering Manager (Mar 2023 - Sep 2024)</p>
              <ul className="list-disc pl-6 text-sm text-gray-600">
                <li>Led a team of 10+ engineers to deliver high-quality mobile, backend, and frontend solutions.</li>
                <li>Introduced Agile methodologies, improving team productivity by 25%.</li>
                <li>Mentored junior developers and conducted regular code reviews to maintain code quality.</li>
                <li>Created detailed reports for upper management on team performance and feature delivery.</li>
                <li>Facilitated communication between product managers and engineers to ensure alignment on project goals.</li>
                <li>Assisted product engineers in creating technically sound Product Requirement Documents (PRDs).</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
            <div>
              <p className="font-medium">Android Engineer Lead (May 2022 - Mar 2023)</p>
              <ul className="list-disc pl-6 text-sm text-gray-600">
                <li>Architected and developed scalable Android applications using modern best practices.</li>
                <li>Integrated third-party APIs for payment processing and analytics.</li>
                <li>Improved app performance by 30% through code optimization and refactoring.</li>
                <li>Resolved complex technical issues and provided guidance to the team.</li>
                <li>Collaborated with cross-pod mobile engineers to establish and implement best practices.</li>
                <li>Conducted technical interviews for new candidates and provided hiring recommendations.</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
            <div>
              <p className="font-medium">Mobile Developer (Mar 2019 - May 2022)</p>
              <ul className="list-disc pl-6 text-sm text-gray-600">
                <li>Developed and maintained KoinWorks SuperApps for both iOS and Android platforms.</li>
                <li>Established a base project structure using MVP architecture and migrated to MVVM for better scalability.</li>
                <li>Collaborated with designers to create intuitive and user-friendly interfaces.</li>
                <li>Implemented secure authentication mechanisms and data encryption to protect user data.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* JAVASIGN */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">JAVASIGN</h3>
        <p className="text-gray-600 text-sm">Mobile Engineer (Feb 2016 - Mar 2019)</p>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
            <div>
              <p>Developed custom mobile applications for iOS, Android, and React Native for clients across various industries.</p>
              <p>Integrated RESTful APIs and third-party SDKs to enhance app functionality.</p>
              <p>Conducted unit and UI testing to ensure app stability and performance.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Indiva Finansia Teknologi */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Indiva Finansia Teknologi</h3>
        <p className="text-gray-600 text-sm">Mobile Developer (Dec 2014 - Jan 2016)</p>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
            <div>
              <p>Developed and maintained mobile applications for iOS and Android, along with backend systems using Laravel for financial services (DompetSehat and VeryFund).</p>
              <p>Collaborated with backend teams to ensure seamless data integration and system reliability.</p>
              <p>Improved app performance and reduced crash rates by 20% through optimization and debugging.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* PT Rabiha Pilar */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">PT Rabiha Pilar</h3>
        <p className="text-gray-600 text-sm">Web Developer (Jan 2014 - Nov 2014)</p>
        <ul className="mt-2 space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
            <div>
              <p>Developed and maintained company websites using Laravel, ensuring high performance and responsiveness.</p>
              <p>Implemented responsive designs to improve user experience across devices.</p>
              <p>Optimized website performance and SEO rankings to increase organic traffic.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    {/* Education Section */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">Education</h2>
      <div className="mt-4">
        <p className="text-lg font-medium text-gray-800">UIN Sunan Kalijaga Yogyakarta</p>
        <p className="text-gray-600">Bachelor's degree, Information Technology (2008 - 2013)</p>
      </div>
    </div>
  </div>
</section>
  );
}
