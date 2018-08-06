// @flow
import * as React from 'react';
import * as R from 'ramda';
import {Link} from 'react-router-dom';
import {NavItemText, BrandText} from '../../typography';
import {Default, Mobile} from '../../responsive';
import './NavBar.scss';

const trs = {
  browse: 'جستجو',
  whoWeAre: 'ما که هستیم؟',
  gift: 'کادو',
  help: 'راهنما',
  getStarted: 'شروع‌ کنید',
  login: 'ورود',
  freshbashi: 'FreshBashi',
};
const data = {
  left: [
    {key: 'help', to: '/help'},
    {
      key: 'getStarted',
      to: '/app/subscription/start',
      className: 'fb-navbar__list__item__link--inverted',
    },
    {key: 'login', to: '/login'},
  ],
  center: [{key: 'freshbashi', to: '/'}],
  right: [
    {key: 'browse', to: '/app/browse'},
    {key: 'whoWeAre', to: '/app/about'},
    {key: 'gift', to: '/giftcards'},
  ],
};

const translateKey = str => (trs[str] ? trs[str] : 'ERROR IN TRANSLATION');
const buildListItem = item => (
  <li className="fb-navbar__list__item" key={item.key}>
    <Link
      className={`fb-navbar__list__item__link ${item.className ? item.className : ''}`}
      to={`/${item.to}`}
    >
      <NavItemText>{translateKey(item.key)}</NavItemText>
    </Link>
  </li>
);
const buildMenuItem = item => (
  <li className="fb-navbar__menuList__item" key={item.key}>
    <Link to={`/${item.to}`} className='fb-navbar__menuList__item__link'>
      <p>{translateKey(item.key)}</p>
    </Link>
  </li>
);
export default class NavBar extends React.Component<{}, {open: boolean}> {
  state = {
    open: false,
  };

  toggleMenu = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.setState(prevState => ({open: !prevState.open}));
  };

  render() {
    const {open} = this.state;
    return (
      <div className={`fb-navbar ${open ? 'fb-navbar--noBorder' : ''}`}>
        <Default>
          <ul className="fb-navbar__list">{R.map(buildListItem)(data.right)}</ul>
        </Default>
        <Mobile>
          <ul className="fb-navbar__list">
            <li className="fb-navbar__list__item">
              <a href="/#" onClick={this.toggleMenu}>
                <span className="icon-menu-normal fb-navbar__menuIcon" />
              </a>
            </li>
          </ul>
        </Mobile>
        <ul className="fb-navbar__list">
          <li>
            <BrandText style={{fontSize: '40px'}}>
              <Link className="fb-navbar__list__item__link" to="/">
                Fresh Bashi
              </Link>
            </BrandText>
          </li>
        </ul>
        <Default>
          <ul className="fb-navbar__list">{R.map(buildListItem)(data.left)}</ul>
        </Default>
        <Mobile>
          <ul className="fb-navbar__list">{buildListItem(data.left[1])}</ul>
        </Mobile>
        <Mobile>
          {open && (
            <ul className="fb-navbar__menuList">
              {R.map(buildMenuItem)(data.right.concat(data.left))}
            </ul>
          )}
        </Mobile>
      </div>
    );
  }
}
