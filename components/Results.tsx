import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseclient';
import Link from 'next/link';
import Image from 'next/image';
type ResultsProps = {
  query: string;
}

export default function Results({query}: ResultsProps): any {
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { count }: { count: any } = await supabase.from('document').select('*', { count: 'exact', head: true });
        const { data, error }: { data: any, error: any } = query ?
          (await supabase.from('document_full').select('id, title, subtitle, authors, publishername, publication_date, keywords').ilike('title', `%${query}%`)) :
          (await supabase.from('document_full').select('id, title, subtitle, authors, publishername, publication_date, keywords').limit(10));
        if (error) {
          setError(error);
          setLoading(false);
        } else {
          setData(data);
          setCount(count);
          setLoading(false);

        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  if (loading) return <div>Chargement en cours ...</div>;
  if (error) return <div>Une erreur s&apos;est produite: {error.message}</div>;
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {data && data.length ? data.map((result, index) => (
          <div key={index} className="w-full sm:w-1 md:w-1/2 lg:w-1/3 p-3">
            <div key={index} className="card card-side bg-base-100 shadow-xl">
              <figure><Image src={"/images/couv.png"} alt="Couverture" width={600} height={1200} /></figure>
              <div className="card-body p-1">
                <h2 className="card-title">{result.title}</h2>
                {/* <p>{result.subtitle}</p> */}
                {/* <p className="text-gray-700 text-sm mbdd-1">Année de publication: {result.publication_date}</p> */}
                <p className="accent">Maison d&apos;édition: {result.publishername}</p>
                <p className="accent">Auteurs: {result.authors && result.authors.map((item: any, i: any) => (
                  <>
                    {item}{i < result.authors.length - 1 ? " - " : ""}
                  </>
                ))}</p>
                <p className="accent">Mots clés: {result.keywords && result.keywords.map((item: any, i: any) => (
                  <>
                    #{item} {i < result.keywords.length - 1 ? "| " : ""}
                  </>
                ))}</p>
                <div className="card-actions justify-end">
                  <Link href={`/document/${result.id}`}><button className="btn btn-primary">Détails</button></Link>
                </div>
              </div>
            </div>
          </div>
        )) : "Pas de résultat"}
      </div>
      <div className="flex flex-wrap justify-center">La base de donnée contient actuellement {count} ouvrages.</div>
    </div>
  )
}
