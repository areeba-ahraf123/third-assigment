
export default function skills(){
  return(
    <section id="skills" className="py-10 bg-fuchsia-400 rounded-lg shadow-lg" >
      <div className="container mx-auto text-center">
        <h1 className="text-3x1 font-bold mb-10 text-gray-900">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-black p-10 rounded-lg shadow-md">
        <h2 className="text-2x1 font-bold mb-4 text-fuchsia-600">HTML & CSS</h2>
        <p className="text-fuchsia-300 text-x1">Building And Structure Web Pages </p>

      </div>

      <div className="bg-black p-10 rounded-lg shadow-md">
        <h2 className="text-2x1 font-bold mb-6 text-fuchsia-600">Javascript</h2>
        <p className="text-fuchsia-300 text-x1">
          Creating daynamic And Web Applications
          </p>

      </div>
     
    <div className="bg-black p-10 rounded-lg shadow-sm"> 
       <h3 className="text-2x1 font-bold mb-6 text-fuchsia-600">Typescript</h3>
      <p className="text-fuchsia-300 text-x1">
      Enhance javascript With Safety And Better</p>
      </div>

      <div className="bg-black p-10 rounded-lg shadow-md">
        <h3 className="text-2x1 font-semibold mb-5 text-fuchsia-600" >Next.Js</h3>
        <p className="text-red-800 text-x1">
          Developing server web and Apps with ease
        </p>
      </div>

      <div className="bg-green-400 p-10 rounded-lg shadow-md">
        <h3 className="text-2x1 font-bold mb-6 text-red-600">
          Tailwaind CSS
        </h3>
        <p className="text-black-800 text-x1">
          Modern Bulding UIS Quiting with styling
        </p>
              </div>
       </div> 
  </div>
  
    </section>
  )
}