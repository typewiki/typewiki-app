import * as React from 'react';
import { fetchRevisions } from '../../routines';
import { connect } from 'react-redux';
import { Classes, Colors, Icon, Intent, Position, Spinner, Tag, Tooltip } from '@blueprintjs/core';
// @ts-ignore
import { useTable } from 'react-table';
import { IconNames } from '@blueprintjs/icons';
import { toArray } from 'lodash-es';
import { DateTime } from 'luxon';
import isEmpty from 'lodash-es/isEmpty';
import UserTooltipContainer from './containers/UserTooltipContainer';
import HistoryNavbarContainer from './containers/HistoryNavbarContainer';

export const History: React.FC = ({ fetchRevisions, revisions, loading, error }: any) => {
  const renderTag = (tag: string) => {
    switch (tag) {
      case 'mw-undo':
        return <Icon icon={IconNames.UNDO} iconSize={12} />;
      case 'mobile edit':
        return <Icon icon={IconNames.MOBILE_PHONE} iconSize={12} />;
      default:
        return tag;
    }
  };
  const columns = React.useMemo(
    () => [
      // {
      //   Header: '',
      //   id: 'bchhgc'
      // },
      {
        Header: 'Описание',
        accessor: (data: any) => data,
        Cell: ({ cell: { value } }: any) => {
          return (
            <span>
              <span style={{ float: 'right' }}>
                {value.tags.map((tag: string, i: number) => (
                  <Tooltip content={<>tooltip</>}>
                    <Tag minimal={true} interactive={true} style={{ marginLeft: 5 }}>
                      {renderTag(tag)}
                    </Tag>
                  </Tooltip>
                ))}
              </span>

              {value.comment || (
                <em className={Classes.TEXT_DISABLED}>отстувствует описание правки</em>
              )}
              {value.minor && (
                <span style={{ marginLeft: 5 }}>
                  <Tooltip
                    className={Classes.TOOLTIP_INDICATOR}
                    position={Position.BOTTOM_LEFT}
                    content="Малая правка"
                  >
                    <strong>м.</strong>
                  </Tooltip>
                </span>
              )}
            </span>
          );
        }
      },
      {
        Header: 'Размер',
        accessor: (data: any) => data,
        Cell: ({ cell: { value } }: any) => {
          console.log(value);
          const difSize = !!revisions[value.parentid]
            ? value.size - revisions[value.parentid].size
            : 99999;
          return (
            <>
              <table>
                <tr>
                  <td>
                    <span style={{ whiteSpace: 'nowrap' }}>
                      {difSize > 0 && <Icon icon={IconNames.CARET_UP} intent={Intent.SUCCESS} />}
                      {difSize < 0 && <Icon icon={IconNames.CARET_DOWN} intent={Intent.DANGER} />}
                      {Math.abs(difSize)}
                    </span>
                  </td>
                  <td align="right">
                    <span style={{ whiteSpace: 'nowrap' }}>{value.size.toLocaleString()} </span>
                  </td>
                </tr>
              </table>
            </>
          );
        }
      },
      {
        Header: 'Участник',
        accessor: (data: any) => data,
        Cell: ({ cell: { value } }: any) => {
          const renderName = () => <span style={{ whiteSpace: 'nowrap' }}>{value.user}</span>;
          if (!value.userid) {
            return renderName();
          }
          return <UserTooltipContainer user={value.user}>{renderName()}</UserTooltipContainer>;
        }
      },
      {
        Header: 'Дата',
        accessor: 'timestamp',
        minWidth: 300,
        Cell: ({ cell: { value } }: any) => {
          const xxx = DateTime.fromISO(value);
          return (
            <time style={{ whiteSpace: 'nowrap' }}>
              {xxx.setLocale('ru').toLocaleString(DateTime.DATETIME_SHORT)}
            </time>
          );
        }
      },
      {
        Header: 'SHA-1',
        accessor: 'sha1',
        Cell: ({ cell: { value } }: any) => {
          return <span className="">{value}</span>;
        }
      }
    ],
    []
  );
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: toArray(revisions)
  });

  React.useEffect(() => {
    console.log(3233);
    isEmpty(revisions) && !loading && !error && fetchRevisions();
  });
  console.log(5555, toArray(revisions));
  return (
    <>
      <div className="bp3-dark" style={{ background: Colors.DARK_GRAY3 }}>
        <HistoryNavbarContainer />
        {loading ? (
          <div style={{ padding: '3em 0', textAlign: 'center' }}>
            <p>
              <Spinner tagName="span" />
            </p>
            <p>Идет загрузка...</p>
          </div>
        ) : (
          <table
            {...getTableProps()}
            style={{ color: Colors.DARK_GRAY3, width: '100%' }}
            className="bp3-html-table bp3-html-table-bordered bp3-html-table-condensed bp3-html-table-striped bp3-interactive bp3-small"
          >
            <thead>
              {headerGroups.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {rows.map(
                (row: any, i: number) =>
                  prepareRow(row) || (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell: any) => {
                        return (
                          <td key={i} {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  )
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({ history: { revisions, loading, error } }: any) => ({
  revisions,
  loading,
  error
});

const mapDispatchToProps = {
  fetchRevisions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
