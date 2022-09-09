import type { NextPage } from 'next'
import { useRouter } from "next/router";

const NewsDetail: NextPage = () => {
    const router = useRouter();
    const newsId = router.query.newsId;
    console.log(newsId);
    return (
    <>
        <p>hello</p>
    </>
    )
}

export default NewsDetail;