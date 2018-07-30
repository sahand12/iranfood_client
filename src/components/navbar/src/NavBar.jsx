import React from 'react';
import * as R from 'ramda';
import {Link} from 'react-router-dom';
import {NavItemText} from '../../typography';
import './NavBar.scss';

const cs = {
  browse: 'جستجو',
  whoWeAre: 'ما که هستیم؟',
  gift: 'کادو',
  help: 'راهنما',
  getStarted: 'شروع‌ کنید',
  login: 'ورود',
  freshbashi: 'FreshBashi',
};

const t = str => cs[str] ? cs[str] : 'ERROR IN TRANSLATION';
const buildListItem = str => (
  <li key={str}>
    <Link to={}>
      <NavItemText>{str}</NavItemText>
    </Link>
  </li>
);
const renderList = R.compose(
  buildListItem,
  t
);

export default function NavBar() {
  return (
    <div className="fb-navbar">
      <ul className="fb-navbar__right">{R.map(renderList)(['browse', 'whoWeAre', 'gift'])}</ul>
      <div className="fb-navbar__center">{t('freshbashi')}</div>
      <ul className="fb-navbar__left">{R.map(renderList)(['help', 'getStarted', 'login'])}</ul>
    </div>
  );
}
