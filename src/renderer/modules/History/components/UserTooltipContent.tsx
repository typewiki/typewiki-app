import * as React from 'react';
import { Classes, Spinner } from '@blueprintjs/core';
import has from 'lodash-es/has';
import isEmpty from 'lodash-es/isEmpty';
import { DateTime } from 'luxon';

export interface UserTooltipContentProps {
  user: any;
  loading?: boolean;
}

export const UserTooltipContent: React.FC<UserTooltipContentProps> = ({ user, loading }) => {
  if (!user || loading) {
    return (
      <div style={{ margin: '1em auto', textAlign: 'center' }}>
        <p>
          <Spinner size={Spinner.SIZE_SMALL} tagName="span" />
        </p>
        <p>Идет загрузка...</p>
      </div>
    );
  }

  const isRegistered = has(user, 'userid');
  const { name, registration, gender, groups, userid, editcount } = user;

  const caption = isRegistered
    ? `Участни${gender === 'female' ? 'ца' : 'к'}`
    : 'Анонимный участник';

  return (
    <div style={{ maxWidth: 300 }}>
      <p>
        <strong className={Classes.TEXT_LARGE}>{name}</strong>
        <br />
        <small>{caption}</small>
      </p>
      {isRegistered && (
        <ul className={Classes.LIST_UNSTYLED}>
          {/*<li><strong>ID:</span>{' '}{userid}</li>*/}
          {!isEmpty(groups) && (
            <li>
              <strong>Группы:</strong>{' '}
              <span>
                {groups.map((group: string, i: number) => (
                  <>
                    <span key={i}>{group}</span>
                    {i < groups.length - 1 && ', '}
                  </>
                ))}
              </span>
            </li>
          )}
          {registration && (
            <li>
              <strong>Зарегистрирован:</strong>{' '}
              <time>
                {DateTime.fromISO(registration)
                  .setLocale('ru')
                  .toLocaleString(DateTime.DATE_MED)}
              </time>
            </li>
          )}
          <li>
            <strong>Всего правок:</strong> <span>{editcount.toLocaleString('ru-RU')}</span>
          </li>
        </ul>
      )}
    </div>
  );
};
