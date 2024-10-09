import { useLoaderData } from 'react-router-dom';

interface GithubUserInfo {
  followers: number;
  avatar_url: string;
}

function Github() {
  const data: GithubUserInfo = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Github   
 picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Rhythm-08');

  const responseData = await response.json();
  return responseData as GithubUserInfo;
};