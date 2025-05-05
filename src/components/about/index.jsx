import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am a Computer Science Engineering student with a strong foundation in programming, data structures and algorithms, and computer science fundamentals. I have hands-on experience in full-stack web development, using technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. I’m also exploring the potential of AI and Python-based applications, including projects that integrate machine learning and automation.

Beyond development, I have experience leading team projects, managing tasks, and delivering solutions from planning to deployment. I’m constantly learning, improving my problem-solving skills, and staying updated with the latest in tech. I aim to build efficient, user-friendly solutions that make a difference.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-6xl">
            4<sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
  <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
    <sub className="font-semibold text-base">
      Languages Known:<br />
      Kannada<br />
      Hindi<br />
      English<br />
      Currently learning Japanese and interested in learning different languages.
    </sub>
  </p>
</ItemLayout>


     


        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,css,firebase,git,github,html,js,mongodb,mysql,nextjs,nodejs,postgres,react,tailwind,vscode`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>


        
      </div>
    </section>
  );
};

export default AboutDetails;
