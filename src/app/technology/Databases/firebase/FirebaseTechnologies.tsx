'use client';
import Image from "next/image";
import firebaseStore from '../../../../../public/images/technology/databases/firebase/firestore.svg'
import mlkit from '../../../../../public/images/technology/databases/firebase/ML-Kit-for-Firebase-badge-light.png'
import adMob from '../../../../../public/images/technology/databases/firebase/google-admob.svg'
import dataStudio from '../../../../../public/images/technology/databases/firebase/Google Data Studio Icon.svg'
import bigquery from '../../../../../public/images/technology/databases/firebase/google_bigquery_logo_icon_168150.svg'
import slack from '../../../../../public/images/technology/databases/firebase/slack-new-logo.svg'
import googleAnalytics from '../../../../../public/images/technology/databases/firebase/google-analytics-3.svg'
import GoogleCloud from '../../../../../public/images/technology/databases/firebase/google-cloud.svg'


const technologies = [
  { name: "Cloud Firestore", imgSrc: firebaseStore },
  { name: "ML Kit", imgSrc: mlkit },
  { name: "Ad Mob", imgSrc: adMob },
  { name: "Data Studio", imgSrc: dataStudio},
  { name: "BigQuery", imgSrc: bigquery},
  { name: "Slack", imgSrc: slack },
  { name: "Google Analytics", imgSrc: googleAnalytics },
  { name: "Google Cloud", imgSrc: GoogleCloud },
];

export default function FirebaseTechnologies() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-slate-900 border-t-[0.5px] border-cyan-700 ">
      <div className="mx-auto text-center max-w-[1000px]  py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Our Firebase Development Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 place-items-center px-12">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={tech.imgSrc}
                alt={tech.name}
                width={50}
                height={80}
                className="transition-transform transform hover:scale-125 duration-300 drop-shadow-md hover:drop-shadow-[0_10px_20px_rgba(0,255,255,0.6)]"
              />
            <p className="mt-2 text-lg font-medium">{tech.name}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}