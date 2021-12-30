import React from 'react';
import { Link } from 'react-router-dom';

import { mobileMenu } from '../../../../utils';

function MobileMainNav(props) {
  const PUBLIC_URL = '/react/molla';

  React.useEffect(() => {
    mobileMenu();
  });

  return (
    <nav className="mobile-nav">
      <ul className="mobile-menu">
        <li>
          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/admin/dashboard`}>
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to={`${process.env.PUBLIC_URL}/admin/templates`}
            className="sf-with-ul"
          >
            Templates
          </Link>
        </li>
        {/* <li>
                    <Link to={ `${process.env.PUBLIC_URL}/product/default/7` } className="sf-with-ul">
                        Product
                    </Link>
                    <ul>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/default/7` }>Default</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/centered/9` }>Centered</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/extended/8` }><span>Extended Info<span className="tip tip-new">New</span></span></Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/gallery/1` }>Gallery</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/sticky/6` }>Sticky Info</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/sidebar/5` }>Boxed With Sidebar</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/fullwidth/2` }>Full Width</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/masonry/4` }>Masonry Sticky Info</Link></li>
                    </ul>
                </li> */}

        {/* <li>
                    <Link to={ `${process.env.PUBLIC_URL}/admin/orders` }>
                        Orders
                    </Link>
                    <ul>
                        <li>
                            <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="sf-with-ul">About</Link>

                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>About 01</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/about-2` }>About 02</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to={ `${process.env.PUBLIC_URL}/pages/contact` } className="sf-with-ul">Contact</Link>

                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact 01</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact-2` }>Contact 02</Link></li>
                            </ul>
                        </li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Login</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQs</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/404` }>Error 404</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/coming-soon` }>Coming Soon</Link></li>
                    </ul>
                </li> */}

        <li>
          <Link to={`${process.env.PUBLIC_URL}/admin/users`}>Users</Link>

          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/blog/classic`}>Classic</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/blog/listing`}>Listing</Link>
            </li>
            <li>
              <Link to="#" className="sf-with-ul">
                Grid
              </Link>
              <ul>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/grid/2cols`}>
                    Grid 2 columns
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/grid/3cols`}>
                    Grid 3 columns
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/grid/4cols`}>
                    Grid 4 columns
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/grid/sidebar`}>
                    Grid sidebar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="sf-with-ul">
                Masonry
              </Link>
              <ul>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/masonry/2cols`}>
                    Masonry 2 columns
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/masonry/3cols`}>
                    Masonry 3 columns
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/masonry/4cols`}>
                    Masonry 4 columns
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/masonry/sidebar`}>
                    Masonry sidebar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="sf-with-ul">
                Mask
              </Link>
              <ul>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/mask/grid`}>
                    Blog mask grid
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/mask/masonry`}>
                    Blog mask masonry
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="sf-with-ul">
                Single Post
              </Link>
              <ul>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/single/3`}>
                    Default with sidebar
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/single-2/97`}>
                    Fullwidth no sidebar
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/blog/single-3/98`}>
                    Fullwidth with sidebar
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMainNav;
