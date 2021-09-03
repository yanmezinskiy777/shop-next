import { useState } from "react";
import { ApiHooks, MutationHook } from "@common/types/hooks";
import { useApiProvider } from "@common";

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider();
  return fn(hooks);
};

export const useMutationHook = (hook: MutationHook) => {
  const { fetcher } = useApiProvider();
  return hook.useHook({
    fetch: (input: any) => {
      return hook.fetcher({
        input,
        fetch: fetcher,
        options: hook.fetcherOptions,
      });
    },
  });
};

const useData = (hook, fetcher) => {
  const [data, setData] = useState(null);

  const hookFetcher = async () => {
    try {
      return await hook.fetcher({ 
          fetch: fetcher,
          options: hook.fetcherOptions,
          input: { }
        });
    } catch (e) {
      throw new Error(e.message || e);
    }
  };

  if (!data) {
    hookFetcher().then((data) => {
      setData(data);
    });
  }

  return data;
};

export const useSWRhook = (hook: any) => {
  const { fetcher } = useApiProvider();
  return hook.useHook({
    useData() {
      const data = useData(hook, fetcher);
      return data;
    },
  });
};
