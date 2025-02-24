import Image from "next/image";
import { socialLinks } from "./config";
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg border border-gray-300">

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Top Skills</h2>
          <ul className="mt-2 list-disc pl-6 text-lg text-gray-600">
            <li>Android</li>
            <li>Android Jetpack</li>
            <li>iOS (Swift)</li>
            <li>Flutter</li>
            <li>Node.js</li>
            <li>Laravel</li>
            <li>k8s</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Experience</h2>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-gray-800">KoinWorks</h3>
            <p className="text-gray-600">5 years 10 months</p>
            <ul className="mt-1 list-disc pl-6 text-gray-600">
              <li>DevOps Engineer (Sep 2024 - Dec 2024)</li>
              <li>Associate Engineering Manager (Mar 2023 - Sep 2024)</li>
              <li>Android Engineer Lead (May 2022 - Mar 2023)</li>
              <li>Mobile Developer (Mar 2019 - May 2022)</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-gray-800">JAVASIGN</h3>
            <p className="text-gray-600">Mobile Engineer (Feb 2016 - Mar 2019)</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-gray-800">Indiva Finansia Teknologi</h3>
            <p className="text-gray-600">Mobile Developer (Dec 2014 - Jan 2016)</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-gray-800">PT Rabiha Pilar</h3>
            <p className="text-gray-600">Web Developer (Jan 2014 - Nov 2014)</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Education</h2>
          <p className="mt-2 text-lg text-gray-800">UIN Sunan Kalijaga Yogyakarta</p>
          <p className="text-gray-600">Bachelor's degree, Information Technology (2008 - 2013)</p>
        </div>
      </div>
    </section>
  );
}
