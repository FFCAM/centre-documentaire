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
                    const { data, error }: { data: any, error: any } = await supabase.from('document_full').select('id, title, subtitle, publication_date, publishername, authors, keywords, collection, notes, summary, isbn, page_number, call_number').eq('id', slug).single();
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
            <div className="p-6 bg-white rounded-lg shadow">

                <div className="bg-[url(https://picsum.photos/300/400)] h-[400px] w-[300px] relative">
                    <div className="absolute bottom-0 w-full px-4 py-3 bg-gray-500/50">
                        <h1 className="text-xl font-semibold text-white"> {data.title} </h1>
                        {data.subtitle && <p className="mb-3 text-sm text-gray-200">{data.subtitle}</p>}
                    </div>
                </div>
                <h2 className="mb-2 text-lg font-medium"></h2>
                
                <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Année de publication</span>: {data.publication_date}</p>
                <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Maison d&apos;édition</span>: {data.publishername}</p>
                {data.edition && <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Edition</span>: {data.edition}</p>}
                {data.collection && <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Collection</span>: {data.collection}</p>}
                <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Auteurs</span>: {data.authors && data.authors.map((item: any, i: any) => (
                    <>
                        {item}{i < data.authors.length - 1 ? " - " : ""}
                    </>
                ))}</p>
                <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Mots clés</span>: {data.keywords && data.keywords.map((item: any, i: any) => (
                    <>
                        #{item} {i < data.keywords.length - 1 ? "| " : ""}
                    </>
                ))}</p>

                {data.notes && <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Notes</span>: {data.notes}</p>}
                {data.summary && <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Résumé</span>: {data.summary}</p>}
                {data.observations && <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Obervations</span>: {data.observations}</p>}
                {data.page_number && <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Nombre de pages</span>: {data.page_number}</p>}
                {data.isbn && <p className="mb-3 text-sm text-gray-700"><span className="font-bold">ISBN</span>: {data.isbn}</p>}
                {data.call_number && <p className="mb-3 text-sm text-gray-700"><span className="font-bold">Emplacement</span>: {data.call_number}</p>}
                {/* <p className="text-xs text-gray-500">ID: {data.id}</p> */}
            </div>
        </div>
    )
}

export default Document