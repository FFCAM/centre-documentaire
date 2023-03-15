import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseclient';
import Link from 'next/link';

export default function Results() {
    const [data, setData] = useState<any[]>([]);
    const [count, setCount] = useState(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { count }: {count:any} = await supabase.from('document').select('*', { count: 'exact', head: true });
          const { data, error }: {data: any, error: any} = await supabase.from('document_full').select('id, title, subtitle, authors, publishername, publication_date, keywords').limit(10);
          if (error) {
            setError(error);
            setLoading(false);
          } else {
            console.log(data)
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
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div className="flex flex-wrap justify-center">
      {data && data.map((result, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow p-6">
            <Link href={`/document/${result.id}`}><h2 className="text-lg font-medium mb-2">{result.title}</h2></Link>
            {result.subtitle && <p className="text-gray-700 text-sm mb-3">{result.subtitle}</p> }
            <p className="text-gray-700 text-sm mb-3">Année de publication: {result.publication_date}</p>
            <p className="text-gray-700 text-sm mb-3">Maison d&apos;édition: {result.publishername}</p>
            <p className="text-gray-700 text-sm mb-3">Auteurs: {result.authors && result.authors.map((item: any, i: any) => (
              <>
                {item}{i < result.authors.length - 1 ? " - " : ""}
              </>
            ))}</p>
            <p className="text-gray-700 text-sm mb-3">Mots clés: {result.keywords && result.keywords.map((item: any, i: any) => (
              <>
                #{item} {i < result.keywords.length - 1 ? "| " : ""}
              </>
              ))}</p>
            {/* <p className="text-gray-500 text-xs">ID: {result.id}</p> */}
          </div>
        </div>
      ))}
      <div>{count} results</div>
    </div>
  )
}
