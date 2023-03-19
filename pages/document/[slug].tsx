import { supabase } from '@/lib/supabaseclient';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

const Document = () => {
    const router = useRouter()
    const isReady = router.isReady;
    const { slug } = router.query;
    const [data, setData] = useState<any>();
    const [count, setCount] = useState(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isReady) {
            const fetchData = async () => {
                try {
                    const { count }: { count: any } = await supabase.from('document').select('*', { count: 'exact', head: true });
                    const { data, error }: { data: any, error: any } = await supabase.from('document_full').select('id, title, subtitle, publication_date, publishername, authors, keywords').eq('id', slug).single();
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

        }
    }, [slug, isReady]);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Oups, nous avons un problème: {error.message}</div>;

    return (
        <div className="w-full">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link href={`/`}>Accueil</Link></li>
                    <li><a>Recherche</a></li>
                    <li>{data.title}</li>
                </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-2">{data.title}</h2>
                {data.subtitle && <p className="text-gray-700 text-sm mb-3">{data.subtitle}</p>}
                <p className="text-gray-700 text-sm mb-3">Année de publication: {data.publication_date}</p>
                <p className="text-gray-700 text-sm mb-3">Maison d&apos;édition: {data.publishername}</p>
                <p className="text-gray-700 text-sm mb-3">Auteurs: {data.authors && data.authors.map((item: any, i: any) => (
                    <>
                        {item}{i < data.authors.length - 1 ? " - " : ""}
                    </>
                ))}</p>
                <p className="text-gray-700 text-sm mb-3">Mots clés: {data.keywords && data.keywords.map((item: any, i: any) => (
                    <>
                        #{item} {i < data.keywords.length - 1 ? "| " : ""}
                    </>
                ))}</p>
                {/* <p className="text-gray-500 text-xs">ID: {data.id}</p> */}
            </div>
        </div>
    )
}

export default Document