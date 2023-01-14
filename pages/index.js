
import CMSFeed from '../components/cmsFeed';

export async function getStaticProps() {
  
    //https://20qe52oi.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'post'%20%26%26%20defined(slug.current)%5D%7B'slug'%3Aslug.current%7D

  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current)]{'slug':slug.current}`);
  // const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title,categories[]-&gt;{category-&gt;}}`);
  const query = encodeURIComponent(`*[_type == 'post' && defined(slug.current) && defined(mainImage)]{'slug':slug.current, mainImage, title, categories}`);
  const url = `https://20qe52oi.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const results = result.result;
 
  return {
    props: {
      results
    },
  };
}

export default function Home({ results }) {
  
  return (
    <div>
      <CMSFeed posts={results} />
    </div>
  );
}
