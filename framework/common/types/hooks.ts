
type HookContext = {
    fetch: (input: any) => any
}

export type MutationHook = {
    fetcher: (input: any) => any
    useHook(context: HookContext): (input: any) => any
}