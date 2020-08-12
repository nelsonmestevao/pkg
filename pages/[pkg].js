export default function Pkg() {
  return (
    <>
      <Head>
        <title>pkgs.estevao.org</title>
      </Head>

      <main>
        <h1>Welcome to pkgs.estevao.org!</h1>
      </main>
    </>
  );
}

Pkg.getInitialProps = async ({ res, query }) => {
  const { pkg } = query;
  const username = "nelsonmestevao";
  const url = `https://github.com/${username}/${pkg}`;

  res.writeHead(301, {
    Location: url,
  });
  res.end();
};
