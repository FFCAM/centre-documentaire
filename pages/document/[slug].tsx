import { supabase } from '@/lib/supabaseclient';
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
                const { data, error }: { data: any, error: any } = await supabase.from('document').select('id, title, subtitle').eq('id', slug).single();
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

    return <p>Document: {slug} ({data.title})</p>
}

export default Document