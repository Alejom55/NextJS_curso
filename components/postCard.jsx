'use client'

//RCC React Client Component
function PostCard({ post }) {
    return (
        <div>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => {
                alert('wazaaa!')
            }}>Click</button>
        </div>
    );
};

export default PostCard;