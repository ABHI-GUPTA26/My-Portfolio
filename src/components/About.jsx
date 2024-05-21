import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black  text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify center w-full h-full ">
        <div className="pb-8 mt-20">
            <p className="text-4xl font-bold inline border-b-4 mt-10 border-gray-500">About</p>

        </div>
        <p className="text-xl mt-10 sm:text-xl">Hi, I'm Abhishek Gupta, a passionate Web Designer and Software Engineer with over 2 years of experience in creating dynamic and user-friendly web applications. Currently, I am pursuing my B.Tech from MANIT Bhopal. I am very excited to work with various companies and startups, helping them build efficient and scalable web applications. I have mentioned my skills in the experience section, and you can go through it to learn more about my expertise.

        </p>
        <br />
        <p className="text-xl sm:text-xl">In my free time, I enjoy working on open-source projects and learning new technologies. I also love reading novels, autobiographies, and stories. I stay updated with the latest trends in web development and design. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me!</p>
      </div>
    </div>
  )
}

export default About
