import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <Container>
          <div className="flex flex-col max-w-xl mx-auto">
            <h1 className="text-6xl">Tentang Saya</h1>
            <p className="text-lg mt-5" style={{ textIndent: '2rem' }}>
              Nama saya Risal Walangadi lahir di daerah Gorontalo, Propinsi
              Gorontalo, Republik Indonesia. Seorang yang tertarik di dunia IT,
              khususnya di dunia Pemrograman, walaupun bukan seorang yang
              berlatar belakang pendidikan IT, tidak menyurutkan niat saya dalam
              belajar pemrograman.
            </p>
            <p className="text-lg mt-5">
              Lewat blog ini saya ingin berbagi pengalaman saya dalam belajar
              pemrograman, khususnya dalam pengembangan Web pada umumnya.
            </p>
            <p className="text-lg mt-5">
              Jika anda mempunyai Saran, kritik dan pertanyaan untuk
              pengenmbangan web ini, bisa anda kirimkan melalui Form Feedback
              dibawah ini. Terima kasih kepada anda yang sudah mengunjungi Web
              ini.
            </p>
            <p className="text-lg mt-5">
              Terima kasih kepada anda yang sudah berkunjung.
            </p>
            <div className="my-10 mx-auto w-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc94ZkMiS5eTzpFaDCuYzZuml9nuPlDj8w_RkSs7Uu7YpTb8Q/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Memuat…
              </iframe>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
