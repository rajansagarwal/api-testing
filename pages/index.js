export async function getStaticProps() {
  const res = await fetch('https://bloomnetwork-api.vercel.app/index.json');
  const data = await res.json();

  return { 
      props: { graph: data }
  }
}

export default function Blog({ graph }) {
  return (
    <ul>
      {graph.map((data) => (
        <div key={data.index}>
        <li>{data.index}</li>
        </div>
      ))}
    </ul>
  )
}
