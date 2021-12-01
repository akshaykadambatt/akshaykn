import React, {FunctionComponent, ReactEventHandler, useState} from 'react'
import 'regenerator-runtime/runtime';
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce  } from 'react-table'
 
//START GLOBAL FILTER CODE
interface Props {
    filter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>
}
const GlobalFilter:FunctionComponent<Props> = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
      setFilter(value || undefined)
    }, 1)

    return (
      <span>
        Search:
        <input
          value={value || ''}
          onChange={e => {
            setValue(e.target.value)
            onChange(e.target.value)
          }}
        />
      </span>
    )
  }
//END GLOBAL FILTER CODE

//START COLUMN FILTER
interface Propss {
    column: any
}
const ColumnFilter:FunctionComponent<Propss> = ({ column }) => {
    const { filterValue, setFilter } = column
    return(
        <span>
            search: 
            <input type="text"
            value = {filterValue||""}
            onChange={(e:any)=>setFilter(e.target.value)}
            />
        </span>
    )
}

//END COLUMN FILTER


export default function Table() {
   const data = React.useMemo(
     () => [
       {
         colA: 'Hello',
         col2: 'World',
       },
       {
         colA: 'react-table',
         col2: 'rocks',
       },
       {
         colA: 'whatever',
         col2: 'you want',
       },{
        colA: 'Ahatever',
        col2: 'you want',
      },
     ],
     []
   )
 
   const columns: any  = React.useMemo(
     () => [
       {
         Header: 'Column A',
         accessor: 'colA', // accessor is the "key" in the data
         Footer: 'Name',
         Filter: false
       },
       {
         Header: 'Column B',
         accessor: 'col2',
         Footer: (column:any) => {
            return column.rows.reduce((sum:number, row:any) => row.id + sum, 0)
          },
         Filter: ColumnFilter,
         disableSortBy: true
       },
     ],
     []
   )
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     footerGroups,
     state,
     setGlobalFilter,
     prepareRow,
   } = useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy)
 
   const { globalFilter } = state

   return (
       <>
       <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
     <table {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th {...column.getHeaderProps()}>
                 {column.render('Header')}
                 {column.canSort? 
                    <div {...column.getHeaderProps(column.getSortByToggleProps())} >
                      {column.isSorted? column.isSortedDesc? '🔽': '🔼': ''}
                      sort 
                    </div>
                 : null}
                 {column.canFilter ? column.render('Filter'):null}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td {...cell.getCellProps()}>
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
       <tfoot>
        {footerGroups.map(group => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map(column => (
              <td {...column.getFooterProps()}>{column.render('Footer')}</td>
            ))}
          </tr>
        ))}
      </tfoot>
     </table>
     </>
   )
 }