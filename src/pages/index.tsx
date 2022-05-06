import type { NextPage } from "next";
import { Card } from "../components/Common/Card";

const Home: NextPage = ({ data }: any) => {
    return (
        <>
            <Card data={data} />
        </>
    );
};

export default Home;
export async function getServerSideProps(context: any) {
    const data = await fetch(
        "https://hexanovate-1oc3v5uf6-thephenom1708.vercel.app/api/movies"
    )
        .then((resp) => resp.json())
        .catch((_error) => []);

    return {
        props: {
            data,
        },
    };
}
