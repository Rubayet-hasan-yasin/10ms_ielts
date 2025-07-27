
type Params = Promise<{ locale: string }>;

export default async function IELTS({
    params,
}: {
    params: Params;
}) {
    const { locale } = await params;

    return <div>Current locale: {locale}</div>;
}