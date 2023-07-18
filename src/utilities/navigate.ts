import { useRouter } from 'next/router';

export function useNavigateTo(path: string) {
  const router = useRouter();

  function navigate() {
    router.push(path);
  }

  return navigate;
}
