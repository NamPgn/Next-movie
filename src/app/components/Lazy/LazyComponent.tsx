
import dynamic from 'next/dynamic';
import { Loading } from '../Message/Notification';

export function LazyComponent(path: string) {
  return dynamic(() => import(`${path}`), {
    loading: () => <Loading />,
    ssr: true,
  });
}
