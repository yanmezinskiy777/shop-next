import { ApiHooks, MutationHook } from "@common/types/hooks";
import { useApiProvider } from "@common";
import useSWR from "swr";
import { ApiFetcher } from "@common/types/config";

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

const useData = (hook:any, fetcher: ApiFetcher, ctx: any) => {
  const hookFetcher = async (query: string) => {
    try {
      return await hook.fetcher({
        fetch: fetcher,
        options: { query },
        input: {},
      });
    } catch (e) {
      throw new Error(e.message || e);
    }
  };

  const response = useSWR(
     hook.fetcherOptions.query,
     hookFetcher,
     ctx.swrOptions
    );

  return response;
};

export const useSWRhook = (hook: any) => {
  const { fetcher } = useApiProvider();
  return hook.useHook({
    useData(ctx: any) {
      const data = useData(hook, fetcher, ctx);
      return data;
    },
  });
};
