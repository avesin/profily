'use client'; // Mark this component as a Client Component

import Image from "next/image";
import { socialLinks } from "./config";
import Link from 'next/link';
import { useState, useRef } from 'react';



const sections = () => {
  return (
    <div id="resume-content" className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
    {/* Contact Section */}
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Nur Avesina Mustari</h1>
      <p className="text-gray-600 mt-2">Software Engineer</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="mailto:your.email@example.com" className="text-blue-500 hover:text-blue-700">
          nuravesinamustari@gmail.com
        </a>
        <span className="text-gray-400">|</span>
        <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700">
          +123 456 7890
        </a>
      </div>
    </div>
  
    {/* Biography Section */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">About Me</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        I am a seasoned software engineer with over 9 years of experience specializing in mobile development (Android, iOS, and cross-platform frameworks like Flutter and React Native) and full-stack development (Node.js, Laravel, and Next.js). I have a proven track record of leading engineering teams, optimizing system performance, and delivering scalable, high-quality solutions. My expertise spans DevOps, cloud infrastructure, and Agile methodologies, enabling me to bridge the gap between development and operations seamlessly. I am passionate about mentoring junior developers, solving complex technical challenges, and driving innovation through cutting-edge technologies.
      </p>
    </div>
  
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
          "Flutter",
          "React Native",
          "Node.js",
          "Laravel",
          "Next.js",
          "Kubernetes (k8s)",
          "CI/CD Pipelines",
          "RESTful APIs",
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
            style={{ fontSize: '0.625rem' }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium"
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
              <p>Developed and maintained SIA websites using php, ensuring high performance and responsiveness.</p>
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
  );
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const targetRef = useRef<HTMLDivElement>(null); // Ref for the div to make fullscreen
  const [isFullscreen, setIsFullscreen] = useState(false); // State to track fullscreen status

  // Function to toggle fullscreen
  const toggleFullscreen = () => {
    if (targetRef.current) {
      if (!isFullscreen) {
        // Enter fullscreen
        if (targetRef.current.requestFullscreen) {
          targetRef.current.requestFullscreen();
        } else if ((targetRef.current as any).mozRequestFullScreen) {
          // Firefox
          (targetRef.current as any).mozRequestFullScreen();
        } else if ((targetRef.current as any).webkitRequestFullscreen) {
          // Chrome, Safari, and Opera
          (targetRef.current as any).webkitRequestFullscreen();
        } else if ((targetRef.current as any).msRequestFullscreen) {
          // IE/Edge
          (targetRef.current as any).msRequestFullscreen();
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          // Firefox
          (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitExitFullscreen) {
          // Chrome, Safari, and Opera
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          // IE/Edge
          (document as any).msExitFullscreen();
        }
      }
    }
  };

  // Listen for fullscreen change events
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  // Attach event listeners
  useState(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  });

  const handlePrint = () => {
    if (targetRef.current) {
      const printContent = targetRef.current.innerHTML; // Get the content of the div
      const originalContent = document.body.innerHTML; // Save the original content

      // Replace the body content with the target div's content
      document.body.innerHTML = printContent;

      // Trigger the print dialog
      window.print();

      // Restore the original content
      document.body.innerHTML = originalContent;

      // Re-render the page (if necessary)
      window.location.reload();
    }
  };

  return (
    <section className="bg-gray-50 py-12 min-h-screen relative">
      <div ref={targetRef}>
      {sections()}
      </div>
      <button disabled={isLoading} onClick={handlePrint}  className="fixed bottom-8 right-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-lg">
      {isLoading ? 'Generating...' : 'Download Resume'}
      </button>
    </section>
  );
}
