import {useSelector} from 'react-redux';
import Head from 'next/head';
import Header from '../Components/Header.jsx';
import DomainInput from '../Components/DomainInput.jsx';
import TagComponent from '../Components/TagComponent.jsx';
import DorkerButton from '../Components/DorkerButton.jsx';

export default function Home() {
  const tags = [
    'Login Pages', 'Sensitive Data', 'Interesting Files',
    'Exposed Directories', 'Vulnerable Pages'
  ];

  return(

    <div className='dark:bg-black'>
      <Head>
        <title>DorkItAll</title>
        <meta name="dorkitall" content="An OSINT tool for making dorking easy" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <DomainInput />
      </div>
      <div>
        
      </div>
    </div>

  );
}
