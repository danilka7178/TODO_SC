interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly TODO_SC_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}