import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Datos de carreras
const carreras = [
  { slug: 'ingenieria-sistemas', nombre: 'Ingeniería de Sistemas' },
  { slug: 'ingenieria-civil', nombre: 'Ingeniería Civil' },
  { slug: 'educacion', nombre: 'Educación' },
  { slug: 'contabilidad', nombre: 'Contabilidad' },
  { slug: 'administracion', nombre: 'Administración' },
];

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const carrera = carreras.find((c) => c.slug === params.slug);
  
  if (!carrera) {
    return {
      title: 'Carrera no encontrada - UNAT',
    };
  }

  return {
    title: `${carrera.nombre} - UNAT`,
    description: `Información sobre la carrera de ${carrera.nombre} en UNAT`,
  };
}

export default function CarreraPage({ params }: Props) {
  const carrera = carreras.find((c) => c.slug === params.slug);

  if (!carrera) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {carrera.nombre}
        </h1>
        <p className="text-xl text-gray-600">
          Información detallada sobre la carrera de {carrera.nombre}.
        </p>
        {/* Aquí puedes agregar más contenido específico de cada carrera */}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return carreras.map((carrera) => ({
    slug: carrera.slug,
  }));
}
