import Container from './container';

export default function Footer() {
  const items = [
    // email'
    { name: 'Email', link: 'mailto: risal.walangadi@gmail.com' },
    // github
    { name: 'Github', link: 'https://github.com/izhal27' },
    // linkedin
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/risal-walangadi/' },
    // facebook
    { name: 'Facebook', link: 'https://www.facebook.com/izhal.gooner' },
    // instagram
    // { name: 'Instagram', link: 'https://www.instagram.com/izhal.gooner' },
    // twitter
    // { name: 'Twitter', link: 'https://twitter.com/gooner_izhal' },
  ];

  const renderedItems = items
    .map(item => (
      <a className="py-3 md:text-lg md:px-5 text-blue-900 hover:text-blue-500" key={item.name} href={item.link} target="_blank">
        {item.name}
      </a>
    ));

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="md:py-3 flex flex-col md:flex-row items-center md:justify-center">
          {renderedItems}
        </div>
      </Container>
    </footer>
  );
}
