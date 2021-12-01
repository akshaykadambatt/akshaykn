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

//START EQUAL FILTER
interface Propss2 {
  column: any
}
function filterGreaterThan(rows:any, id:any, filterValue:any) {
  return rows.filter((row:any) => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}
const EqualFilter:FunctionComponent<Propss2> = ({
  column: { filterValue, setFilter, preFilteredRows, id }
}) => {
  // Calculate the min and max using the preFilteredRows
  //filterValue = current value of filter
  //setFilter = An instance-level function used to update the filter value for a specific column.
  //preFilteredRows = Currently available rows
  //id = column identifier 
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach((row: { values: { [x: string]: number; }; }) => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <>
      <input
        type="range"
        min={min}
        max={max+10}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
      />
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  )
}
//END COLUMN FILTER

//START DROPDOWN FILTER
interface Propss3 {
  column: any
}
const DropdownFilter:FunctionComponent<Propss3> = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  // Calculate the options for filtering using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row: { values: { [x: string]: unknown; }; }) => {
      options.add(row.values[id])
    })
    return [...Array.from(options.values())]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option:any, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
//END DROPDOWN FILTER
export default function Table() {
   const data = React.useMemo(
     () => [
       {colA: 'Hello',col2: 'World',col3: 33,col4: 'active',},
       {colA: 'react-table',col2: 'rocks',col3: 98,col4: 'inactive',},
       {colA: 'whatever',col2: 'you want',col3: 256,col4: 'active',},
       {colA: 'Ahatever',col2: 'you want',col3: 54,col4: 'inactive',},
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
       },{
        Header: 'Number',
        accessor: 'col3',
        Footer: (column:any) => {
           return column.rows.reduce((sum:number, row:any) => row.id + sum, 0)
         },
        Filter: EqualFilter,
        filter: filterGreaterThan, //Can be a function or 'includes'or 'between'or 'equals'
        disableSortBy: false
      },{
        Header: 'Status',
        accessor: 'col4',
        Footer: (column:any) => {
           return column.rows.reduce((sum:number, row:any) => row.id + sum, 0)
         },
        Filter: DropdownFilter,
        filter: 'equals', 
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