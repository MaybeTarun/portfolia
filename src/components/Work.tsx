const Work = () => {
  const technologies = [
    { imageUrl: "https://skillicons.dev/icons?i=react", profileUrl: "https://react.dev/" },
    { imageUrl: "https://skillicons.dev/icons?i=next", profileUrl: "https://nextjs.org/" },
    { imageUrl: "https://skillicons.dev/icons?i=express", profileUrl: "https://expressjs.com/" },
    { imageUrl: "https://skillicons.dev/icons?i=nodejs", profileUrl: "https://nodejs.org/en/" },
    { imageUrl: "https://skillicons.dev/icons?i=firebase", profileUrl: "https://firebase.google.com/" },
    { imageUrl: "https://skillicons.dev/icons?i=threejs", profileUrl: "https://threejs.org/" },
    { imageUrl: "https://skillicons.dev/icons?i=html", profileUrl: "https://developer.mozilla.org/docs/Web/HTML" },
    { imageUrl: "https://skillicons.dev/icons?i=css", profileUrl: "https://developer.mozilla.org/docs/Web/CSS" },
    { imageUrl: "https://skillicons.dev/icons?i=js", profileUrl: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { imageUrl: "https://skillicons.dev/icons?i=ts", profileUrl: "https://www.typescriptlang.org/" },
    { imageUrl: "https://skillicons.dev/icons?i=tailwind", profileUrl: "https://tailwindcss.com/" },
    { imageUrl: "https://skillicons.dev/icons?i=mysql", profileUrl: "https://www.mysql.com/" },
    { imageUrl: "https://skillicons.dev/icons?i=kotlin", profileUrl: "https://kotlinlang.org/" },
    { imageUrl: "https://skillicons.dev/icons?i=flutter", profileUrl: "https://flutter.dev/" },
    { imageUrl: "https://skillicons.dev/icons?i=mongodb", profileUrl: "https://www.mongodb.com/" },
    { imageUrl: "https://skillicons.dev/icons?i=aws", profileUrl: "https://aws.amazon.com/" },
    { imageUrl: "https://skillicons.dev/icons?i=kubernetes", profileUrl: "https://kubernetes.io/" },
    { imageUrl: "https://skillicons.dev/icons?i=azure", profileUrl: "https://azure.microsoft.com/en-in" },
    { imageUrl: "https://skillicons.dev/icons?i=python", profileUrl: "https://www.python.org/" },
    { imageUrl: "https://skillicons.dev/icons?i=cpp", profileUrl: "https://isocpp.org/" },
    { imageUrl: "https://skillicons.dev/icons?i=java", profileUrl: "https://www.java.com/" },
    { imageUrl: "https://skillicons.dev/icons?i=latex", profileUrl: "https://www.latex-project.org/" },
    { imageUrl: "https://skillicons.dev/icons?i=solidity", profileUrl: "https://docs.soliditylang.org/" },
    { imageUrl: "https://skillicons.dev/icons?i=figma", profileUrl: "https://www.figma.com/" },
    { imageUrl: "https://skillicons.dev/icons?i=ps", profileUrl: "https://www.adobe.com/products/photoshop.html" },
    { imageUrl: "https://skillicons.dev/icons?i=ai", profileUrl: "https://www.adobe.com/products/illustrator.html" },
    { imageUrl: "https://skillicons.dev/icons?i=blender", profileUrl: "https://www.blender.org/" }
  ];

  return (
    <div className="w-full min-h-screen pt-16">
      <div className="">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center mx-4 group shrink-0">
                <a 
                  href={tech.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="grayscale group-hover:grayscale-0 transition-all duration-200"
                >
                  <img 
                    src={tech.imageUrl}
                    alt="technology icon"
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </a>
              </div>
            ))}
            {technologies.map((tech, index) => (
              <div key={`duplicate-${index}`} className="flex flex-col items-center mx-4 group shrink-0">
                <a 
                  href={tech.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="grayscale group-hover:grayscale-0 transition-all duration-200"
                >
                  <img 
                    src={tech.imageUrl}
                    alt="technology icon"
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </a>
                <span className="mt-2 text-sm font-medium text-gray-600 capitalize">
                  {tech.profileUrl.split('/')[2]?.replace('www.', '').split('.')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;