
import xIcon from '../../assets/images/footer/x-icon.svg';
import facebookIcon from '../../assets/images/footer/facebook-icon.svg';
import instagramIcon from '../../assets/images/footer/instagram-icon.svg';
import linkedinIcon from '../../assets/images/footer/linkedin-icon.svg';
import logo from '../../assets/images/footer/logo.svg';


const Footer = () => {

  const socialLinks = {

    x_twitter: 'https://x.com/compassuol',
    facebook: 'https://www.facebook.com/compass.uol',
    instagram: 'https://www.instagram.com/compass.uol/',
    linkedin: 'https://www.linkedin.com/company/compass-uol/',
  };
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">


  <div className="space-y-4 flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo cyber" className="h-6 w-auto" />
          <p className="text-gray-400 text-center md:text-left">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>


          
          <div className="hidden md:flex items-center justify-start space-x-8 mt-40">
            <a href={socialLinks.x_twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <img src={xIcon} alt="Ícone do X" className="w-4 h-4" />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <img src={facebookIcon} alt="Ícone do Facebook" className="w-4 h-4" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <img src={linkedinIcon} alt="Ícone do LinkedIn" className="w-4 h-4" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <img src={instagramIcon} alt="Ícone do Instagram" className="w-4 h-4" />
            </a>
          </div>
        </div>


  <div className="space-y-4 flex flex-col items-center md:items-start">
          <h3 className="font-bold text-center md:text-left">Services</h3>
          <ul className="space-y-2 text-gray-400 text-center md:text-left">
            <li><a href="#" className="hover:text-white">Bonus program</a></li>
            <li><a href="#" className="hover:text-white">Gift cards</a></li>
            <li><a href="#" className="hover:text-white">Credit and payment</a></li>
            <li><a href="#" className="hover:text-white">Service contracts</a></li>
            <li><a href="#" className="hover:text-white">Non-cash account</a></li>
            <li><a href="#" className="hover:text-white">Payment</a></li>
          </ul>
        </div>


  <div className="space-y-4 flex flex-col items-center md:items-start">
          <h3 className="font-bold text-center md:text-left">Assistance to the buyer</h3>
          <ul className="space-y-2 text-gray-400 text-center md:text-left">
            <li><a href="#" className="hover:text-white">Find an order</a></li>
            <li><a href="#" className="hover:text-white">Terms of delivery</a></li>
            <li><a href="#" className="hover:text-white">Exchange and return of goods</a></li>
            <li><a href="#" className="hover:text-white">Guarantee</a></li>
            <li><a href="#" className="hover:text-white">Frequently asked questions</a></li>
            <li><a href="#" className="hover:text-white">Terms of use of the site</a></li>
          </ul>
        </div>

      </div>
      {/* Ícones de redes sociais no final do footer para mobile */}
      <div className="flex md:hidden items-center justify-center space-x-8 mt-8">
        <a href={socialLinks.x_twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={xIcon} alt="Ícone do X" className="w-4 h-4" />
        </a>
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={facebookIcon} alt="Ícone do Facebook" className="w-4 h-4" />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={linkedinIcon} alt="Ícone do LinkedIn" className="w-4 h-4" />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={instagramIcon} alt="Ícone do Instagram" className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;