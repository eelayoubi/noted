import React from 'react';

import Styles from '~/styles.css';
import { NavLink } from 'react-router-dom';

const NoteListItem = ({
  id, title, body
}) => {
  const display = body.length > 100 ? `${body.slice(0, 100)}…` : body;
  const destination = `/${id}`;

  return (
    <NavLink to={destination} className={Styles.note}>
      <h2 className={Styles.note__title}>{ title }</h2>
      <p className={Styles.note__body}>{ display }</p>
    </NavLink>
  );
};

export default NoteListItem;
