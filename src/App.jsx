function App() {
  const colorSamples = [
    { colorClass: 'bg-rosado-principal', name: 'Rosado Principal', hex: '#D98299' },
    { colorClass: 'bg-rosado-claro', name: 'Rosado Claro', hex: '#D9A3B1' },
    { colorClass: 'bg-lavanda-base', name: 'Lavanda Base', hex: '#B7A4BF' },
    { colorClass: 'bg-verde-sage', name: 'Verde Sage', hex: '#A8BFB7' },
    { colorClass: 'bg-beige-calido', name: 'Beige Cálido', hex: '#F2E9D8', border: true },
    { colorClass: 'bg-gris-carbon', name: 'Gris Carbón', hex: '#3C3530' },
    { colorClass: 'bg-verde-bosque', name: 'Verde Bosque', hex: '#4A6B5C' },
    { colorClass: 'bg-lavanda-profundo', name: 'Lavanda Profundo', hex: '#6B5A73' },
    { colorClass: 'bg-sakura', name: 'Sakura', hex: '#F7CFE3' },
    { colorClass: 'bg-cottonSky', name: 'Cotton Sky', hex: '#A7D3E8' },
    { colorClass: 'bg-white', name: 'Blanco', hex: '#FFFFFF', border: true },
    { colorClass: 'bg-black', name: 'Negro', hex: '#000000' }
  ]

  return (
    <div className="min-h-screen bg-beige-calido px-6">
      {/* Navbar Kawaii */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-beige-calido via-sakura/30 to-beige-calido px-10 py-5 shadow-sm border-b border-rosado-principal/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-pacifico text-[26px] text-verde-bosque no-underline flex items-center gap-1.5 tracking-wide before:content-['○'] before:text-[20px] before:text-rosado-claro before:mr-0.5">
            Amigurumis
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#inicio" className="font-quicksand font-medium text-[15px] text-lavanda-profundo px-4 py-2 rounded-md transition-all hover:bg-rosado-claro/10 hover:text-verde-bosque">
              Inicio
            </a>
            <a href="#galeria" className="font-quicksand font-medium text-[15px] text-lavanda-profundo px-4 py-2 rounded-md transition-all hover:bg-rosado-claro/10 hover:text-verde-bosque">
              Explorar
            </a>
            <a href="#sobre-mi" className="font-quicksand font-semibold text-[15px] bg-gradient-to-br from-rosado-claro to-verde-sage text-white px-4 py-2 rounded-md transition-all hover:from-rosado-principal hover:to-verde-bosque">
              Crear publicación
            </a>
            <a href="#contacto" className="font-quicksand font-medium text-[15px] text-lavanda-profundo px-4 py-2 rounded-md transition-all hover:bg-rosado-claro/10 hover:text-verde-bosque">
              Perfil
            </a>
          </div>

          <div className="hidden md:block relative mx-5">
            <input 
              type="text" 
              placeholder="Buscar patrones..." 
              className="py-2 px-3 pr-9 border border-verde-sage/30 rounded-md bg-white/60 font-nunito text-sm text-gris-carbon w-[180px] transition-all focus:outline-none focus:border-rosado-claro focus:w-[220px] focus:bg-white/90"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-transparent border-none text-rosado-claro text-sm cursor-pointer">
              ⌕
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative bg-transparent border-none text-lg text-lavanda-profundo cursor-pointer p-1.5 rounded transition-all hover:bg-rosado-claro/10 hover:text-rosado-principal">
              ○
              <span className="absolute -top-0.5 -right-0.5 bg-rosado-principal text-white text-[9px] font-semibold px-1 py-0.5 rounded-lg min-w-[14px] text-center">
                3
              </span>
            </button>
            <img 
              src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23A8BFB7'/%3E%3Ccircle cx='16' cy='12' r='5' fill='%23F2E9D8'/%3E%3Cpath d='M6 26c0-5.5 4.5-10 10-10s10 4.5 10 10' fill='%23F2E9D8'/%3E%3C/svg%3E" 
              alt="Avatar" 
              className="w-8 h-8 rounded-full border-2 border-rosado-claro/40 cursor-pointer transition-all hover:border-rosado-claro"
            />
            
            <div className="md:hidden flex flex-col cursor-pointer gap-1">
              <span className="w-[25px] h-[3px] bg-lavanda-profundo rounded-sm transition-all"></span>
              <span className="w-[25px] h-[3px] bg-lavanda-profundo rounded-sm transition-all"></span>
              <span className="w-[25px] h-[3px] bg-lavanda-profundo rounded-sm transition-all"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto py-8">
        {/* Tipografía Section */}
        <section className="bg-white rounded-2xl shadow-sm p-8 mb-8 text-center">
          <h1 className="font-pacifico text-h1 text-verde-bosque leading-tight mt-10 mb-4">
            Títulos Principales (Pacifico)
          </h1>
          <h2 className="font-quicksand text-h2 font-bold text-lavanda-profundo mb-3">
            Subtítulo con Quicksand
          </h2>
          <h3 className="font-quicksand text-h3 font-bold text-lavanda-profundo mb-2">
            Otros (Quicksand)
          </h3>
          <p className="font-nunito text-body text-gris-carbon leading-relaxed mb-4">
            Ejemplo de párrafo con Nunito. Observa el tamaño, el color y la legibilidad.
          </p>
          
          <div className="space-y-2 mt-6">
            <div className="font-nunito text-2xl text-gris-carbon">Texto Nunito 24px - Para destacados</div>
            <div className="font-nunito text-xl text-gris-carbon">Texto Nunito 20px - Para subtextos importantes</div>
            <div className="font-nunito text-lg text-gris-carbon">Texto Nunito 18px - Para contenido destacado</div>
            <div className="font-nunito text-base text-gris-carbon">Texto Nunito 16px - Tamaño estándar web</div>
            <div className="font-nunito text-sm text-lavanda-profundo">Texto Nunito 14px - Pie de página y notas</div>
          </div>
        </section>

        {/* Paleta de Colores */}
        <section className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <h2 className="font-quicksand text-h2 font-bold text-lavanda-profundo mb-6">
            Paleta de colores
          </h2>
          
          <div className="flex flex-wrap justify-center items-start gap-6">
            {colorSamples.map((sample, index) => (
              <div key={index} className="inline-block text-center align-top mx-2">
                {/* Círculo de color kawaii */}
                <div className="relative w-[100px] h-[100px] my-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  {/* Círculo de fondo con el color */}
                  <div 
                    className={`w-[80px] h-[80px] rounded-full ${sample.colorClass} 
                      ${sample.border ? 'ring-2 ring-lavanda-profundo/30' : ''}
                      shadow-xl mx-auto flex items-center justify-center relative overflow-hidden
                    `}
                  >
                    {/* Brillo kawaii */}
                    <div className="absolute top-2 left-3 w-[20px] h-[20px] bg-white/50 rounded-full blur-sm"></div>
                    <div className="absolute top-4 left-6 w-[12px] h-[12px] bg-white/40 rounded-full blur-[2px]"></div>
                  </div>
                  
                  {/* Estrellitas brillantes alrededor */}
                  <div className="absolute -top-1 left-[10px] text-yellow-300 text-xs animate-pulse">✨</div>
                  <div className="absolute top-[15px] -right-1 text-sakura text-[10px] animate-pulse delay-100">⭐</div>
                  <div className="absolute bottom-[10px] -left-1 text-cottonSky text-xs animate-pulse delay-200">✨</div>
                </div>
                
                <div className="relative inline-block w-[140px] mt-2 bg-gradient-to-br from-white via-white to-sakura/20 px-3 py-2 rounded-2xl shadow-md border border-rosado-claro/20
                  before:content-[''] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:text-base
                  after:content-['✨'] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:text-xs">
                  <div className="font-nunito text-[13px] font-semibold text-lavanda-profundo text-center leading-tight">
                    {sample.hex}<br/>
                    <span className="text-[11px] font-normal text-gris-carbon/70">{sample.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
