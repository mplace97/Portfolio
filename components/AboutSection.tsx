import React from "react"
import Image from "next/image"


const skills = [

  { skill: "Java", 
    image: "java.png",
    experience: "2 years",
    technologies: "Spring Boot"
  },
  { skill: "SQL", 
    image: "sql.png",
    experience: "2 years",
    technologies: "MySQL"
  },  

]




const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Marco and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> IT consultant 
              based in Turin,To.
            </p>
            <br />
            <p>
              I graduated in computer science at the University of Turin in 2021 
              and have been working in the sector ever since.
            </p>
            <br />
            <p>
              I have a wide variety of hobbies and passions that keep me busy. 
              From piloting Drones, to sports, to traveling, to making YouTube videos, 
              I am always looking for new experiences and love to keep busy and learn new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
          <h1 className="text-2xl font-bold mb-6">My Tech Stack</h1>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => (
              <div key={idx} className="flex items-center mb-8"> {/* Aggiunto mb-8 per spazio tra gli item */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={`Logo ${item.skill}`}
                    className="w-8 h-8 mr-2 rounded-full"
                  />
                )}
                <div>
                  <p className="font-bold">{item.skill}</p>
                  {item.technologies && <p className="text-gray-600">Technologies: {item.technologies}</p>}
                  {item.experience && <p className="text-gray-600"><strong>Experience:</strong> {item.experience}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
