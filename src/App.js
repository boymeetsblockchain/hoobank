import  styles from './styles'
import { Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,} from './components'
function App() {
  return (
    <div className='bg-black overflow-hidden  w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
           <Hero/>
        </div>
      </div>
      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
      
        <Stats/>
        < Business/>
        < Billing/>
        < CardDeal/>
        <Testimonials/>
       < Clients/>
         <CTA/>
        <Footer/>
        </div>
      </div>

    </div>
  )
}

export default App