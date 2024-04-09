import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const links = [
        [
            { label: 'For Designers', key: 'header-1' },
            { label: 'Go Pro', key: 'item-1-1' },
            { label: 'Explore Design Work', key: 'item-1-2' },
            { label: 'Design Blog', key: 'item-1-3' },
            { label: 'Overtime Podcast', key: 'item-1-4' },
            { label: 'Playoffs', key: 'item-1-5' },
            { label: 'Weekly Warm up', key: 'item-1-6'},
            { label: 'Refer a Friend', key: 'item-1-6'},
            { label: 'Code of conduct', key: 'item-1-6'},
        ],
        [
            { label: 'Hire Designers', key: 'header-2' },
            { label: 'Post a Job Offering', key: 'item-2-1' },
            { label: 'Post a freelance project', key: 'item-2-2' },
            { label: 'Search for Designers', key: 'item-2-3' },
            { label: 'Privacy policy', key: 'item-2-4' },
            { label: 'Status', key: 'item-2-5' },
            { label: 'Brands', key: 'header-3' },
            { label: 'Advertise with us', key: 'item-3-1' },
        ],
        [
            { label: 'Company', key: 'header-2' },
            { label: 'About', key: 'item-2-1' },
            { label: 'Careers', key: 'item-2-2' },
            { label: 'Support', key: 'item-2-3' },
            { label: 'Media Kit', key: 'item-2-4' },
            { label: 'Testimonials', key: 'item-2-5' },
            { label: 'API', key: 'item-2-6' },
            { label: 'Terms of service', key: 'item-2-7' },
            { label: 'Privacy policy', key: 'item-2-8' },
            { label: 'Cookie policy', key: 'item-2-9' },
        ],
        [
            { label: 'Directories', key: 'header-2' },
            { label: 'Design jobs', key: 'item-2-1' },
            { label: 'Design for hire', key: 'item-2-2' },
            { label: 'Freelance', key: 'item-2-3' },
            { label: 'Tags', key: 'item-2-4' },
            { label: 'Places', key: 'item-2-5' },
            { label: 'Design assets', key: 'header-3' },
            { label: 'MarketPlace', key: 'item-3-1' },
            { label: 'Creative', key: 'item-3-1' },
            { label: 'Fontspring', key: 'item-3-1' },
            { label: 'Font Squirrel', key: 'item-3-1' },
        ],
        [
            { label: 'Design Resources', key: 'header-2' },
            { label: 'Freelancing', key: 'item-2-1' },
            { label: 'Hiring', key: 'item-2-2' },
            { label: 'Portfolio', key: 'item-2-3' },
            { label: 'Education', key: 'item-2-4' },
            { label: 'Process', key: 'item-2-5' },
            { label: 'Industry Trends', key: 'item-2-6' },
        ],
    ];

    return (
        <footer>
            <div className="bg-gray-100 text-white p-8 flex flex-col md:flex-row justify-around items-center">
                <div className="mb-8 md:mb-0 md:mr-8">
                    <img src="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo-2009.png" alt="logo" className="w-[100px] h-[50px]"/>
                    <p className="text-gray-800">Dribble is the worlds leading <br/> community for creatives to share, <br/>grow, and get hired.</p>
                    <div className="flex items-start gap-4 mt-4 text-2xl text-gray-900">
                        <a href="https://instagram.com/nanduvarma__?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaInstagram /></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaFacebook /></a>
                        <a href="https://www.linkedin.com/in/ramineni-nandu-varma-85a226251" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaLinkedin /></a>
                        <a href="https://youtube.com/@Nandu_Varma?feature=shared" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaYoutube /></a>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between md:justify-start items-start gap-12 mb-8 md:mb-0">
                    {links.map((col, index) => (
                        <ul className={`col col-${index + 1} mb-4`} key={`col-${index}`}>
                            {col.map((link, index) => (
                                <li key={`link-${col}-${index}` } className="pb-3">
                                    <a href="/" className={`text-gray-800 hover:text-[#EB528D] my-2 ${link.key.startsWith('header') ? 'font-bold ' : ''}`} style={{ padding: '10px 0' }}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
