import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({children}) => (
    <>
    <Head>
        <title>Note App</title>
    </Head>
    <Header/>
    <div class='row'>
        <div class='col-2'>
        <Sidebar />
        </div>
        <div class='col-10'>
        Hello world
        </div>
    </div>
    
    </>
)

export default Layout;