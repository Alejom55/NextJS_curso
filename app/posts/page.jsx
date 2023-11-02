import PostCard from '../../components/postCard'

async function LoadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return data;
}
//RSC React Server Component
async function postPages() {
    const posts = await LoadPosts()
    // console.log(posts)
    return (
        <div>
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />

            ))}
        </div>
    )
};

export default postPages