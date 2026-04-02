import './styleMainContent.css';
import Products from './Products';   // 👈 import pannunga

const MainContent = () => {
    return (
        <main className='main'>
            <h2 style={{ textAlign: "center" }}>Products</h2>

            <Products />   {/* 👈 inga than products varum */}
        </main>
    );
}

export default MainContent;