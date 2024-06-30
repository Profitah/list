/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const UserLikes = ({ posts }: { posts: Array<{ id: number, name: string, description: string }> }) => {
  if (!posts) {
    return null;
  }

  return (
    <div css={styles.postsWrapper}>
      <div css={styles.postsHeader}>
        좋아요 목록
      </div>
      {posts.map((post) => (
        <div key={post.id} css={styles.postWrapper}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://example.com/${post.name}`}  
            css={styles.link}
          >
            <h2 css={styles.postTitle}>{post.name}</h2>
          </a>
          <p css={styles.postDescriptionText}>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

const posts = [
  {
    id: 1,
    name: '글 제목 1',
    description: '글 내용 1',
  },
  {
    id: 2,
    name: '글 제목 2',
    description: '글 내용 2',
  },
  {
    id: 3,
    name: '글 제목 3',
    description: '글 내용 3',
  },
];

const Page = () => <UserLikes posts={posts} />;

const styles = {
  postsWrapper: css`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 0px 16px;
  `,
  postsHeader: css`
    margin-top: 2em;
    padding: 16px 0;
    font-size: 2rem;
    font-weight: 600;
    border-bottom: 1px solid #e1e4e8;
  `,
  postWrapper: css`
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
    padding: 24px 0;
  `,
  postDescription: css`
    padding: 12px 0;
  `,
  link: css`
    text-decoration: none;
  `,
  postTitle: css`
    margin: 0;
    color: #0366d6;
    font-size: 20px;
    display: inline-block;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
  postDescriptionText: css`
    margin: 0;
    font-size: 14px;
  `,
};


export default Page;
