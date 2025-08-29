import LogoLoop from './Loops/LogoLoop';
import ProjectLoop from './Loops/ProjectLoop';
import test from '../assets/test.png';

const Work = () => {
  const skills = [
    { src: "https://skillicons.dev/icons?i=react", href: "https://react.dev/", alt: "ReactJs" },
    { src: "https://skillicons.dev/icons?i=next", href: "https://nextjs.org/", alt: "NextJs" },
    { src: "https://skillicons.dev/icons?i=express", href: "https://expressjs.com/", alt: "ExpressJs" },
    { src: "https://skillicons.dev/icons?i=nodejs", href: "https://nodejs.org/en/", alt: "NodeJs" },
    { src: "https://skillicons.dev/icons?i=firebase", href: "https://firebase.google.com/", alt: "Firebase" },
    { src: "https://skillicons.dev/icons?i=threejs", href: "https://threejs.org/", alt: "ThreeJs" },
    { src: "https://skillicons.dev/icons?i=html", href: "https://developer.mozilla.org/docs/Web/HTML", alt: "HTML" },
    { src: "https://skillicons.dev/icons?i=css", href: "https://developer.mozilla.org/docs/Web/CSS", alt: "CSS" },
    { src: "https://skillicons.dev/icons?i=js", href: "https://developer.mozilla.org/docs/Web/JavaScript", alt: "Javascript" },
    { src: "https://skillicons.dev/icons?i=ts", href: "https://www.typescriptlang.org/", alt: "Typescript" },
    { src: "https://skillicons.dev/icons?i=tailwind", href: "https://tailwindcss.com/", alt: "TailwindCSS" },
    { src: "https://skillicons.dev/icons?i=mysql", href: "https://www.mysql.com/", alt: "MySQL" },
    { src: "https://skillicons.dev/icons?i=kotlin", href: "https://kotlinlang.org/", alt: "Kotlin" },
    { src: "https://skillicons.dev/icons?i=flutter", href: "https://flutter.dev/", alt: "Flutter" },
    { src: "https://skillicons.dev/icons?i=mongodb", href: "https://www.mongodb.com/", alt: "MongoDB" },
    { src: "https://skillicons.dev/icons?i=aws", href: "https://aws.amazon.com/", alt: "AWS" },
    { src: "https://skillicons.dev/icons?i=kubernetes", href: "https://kubernetes.io/", alt: "Kubernetes" },
    { src: "https://skillicons.dev/icons?i=azure", href: "https://azure.microsoft.com/en-in", alt: "Azure" },
    { src: "https://skillicons.dev/icons?i=python", href: "https://www.python.org/", alt: "Python" },
    { src: "https://skillicons.dev/icons?i=cpp", href: "https://isocpp.org/", alt: "C++" },
    { src: "https://skillicons.dev/icons?i=java", href: "https://www.java.com/", alt: "Java" },
    { src: "https://skillicons.dev/icons?i=latex", href: "https://www.latex-project.org/", alt: "Latex" },
    { src: "https://skillicons.dev/icons?i=solidity", href: "https://docs.soliditylang.org/", alt: "Solidity" },
    { src: "https://skillicons.dev/icons?i=figma", href: "https://www.figma.com/", alt: "Figma" },
    { src: "https://skillicons.dev/icons?i=ps", href: "https://www.adobe.com/products/photoshop.html", alt: "Photoshop" },
    { src: "https://skillicons.dev/icons?i=ai", href: "https://www.adobe.com/products/illustrator.html", alt: "Illustrator" },
    { src: "https://skillicons.dev/icons?i=blender", href: "https://www.blender.org/", alt: "Blender" }
  ];

  const projectline1 = [
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" },
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" }
  ];

  const projectline2 = [
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" },
    { src: test, href: "https://bento-gen.vercel.app/", alt: "Test" }
  ];


  return (
    <div className="w-full h-full">
      <div className="">
        <div className="relative overflow-hidden">
          <LogoLoop
            logos={skills}
            speed={100}
            direction="left"
            logoHeight="clamp(70px, 8vw, 80px)"
            gap={30}
            scaleOnHover
            ariaLabel="skills"
          />
          <ProjectLoop
            logos={projectline1}
            speed={60}
            direction="right"
            logoHeight={220}
            gap={30}
            scaleOnHover
            ariaLabel="projects"
          />
          <ProjectLoop
            logos={projectline2}
            speed={60}
            direction="left"
            logoHeight={220}
            gap={30}
            scaleOnHover
            ariaLabel="projects"
          />
        </div>
      </div>
    </div>
  );
}

export default Work;