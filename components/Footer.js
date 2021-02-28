import stylesheet from 'styles/second.scss'
import responsive from 'styles/responsive.scss'

const Year = new Date;
const YearNow = Year.getFullYear();
const Footer = () => (
    <footer><span>KANAMOBI - Copyright © {YearNow}</span>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <style dangerouslySetInnerHTML={{ __html: responsive }} />

    </footer>
 

);

export default Footer;
