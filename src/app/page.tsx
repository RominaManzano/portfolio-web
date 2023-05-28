import ContactCard from '@/components/ContactCard';
import Footer from '@/components/Footer';
import PersonalCard from '@/components/PersonalCard';

const Home = () => (
  <>
    <ContactCard />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PersonalCard />
    </main>
    <Footer />
  </>
)

export default Home;
