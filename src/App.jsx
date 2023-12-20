import styles from './style';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials,
Clients, CTA, Footer} from './components'


const App = () => (

    <div className="bg-primary w-full overflow-hidden">
      {/* navbar */}

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero section */}
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>
      {/* body section */}
      <div className={` bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business /> 
            <Billing /> 
            <CardDeal /> 
            <Testimonials /> 
            <Clients />  
            <CTA /> 
            <Footer />

        </div>
      </div>

    </div>
)

export default App
