import React, {FunctionComponent, ReactEventHandler, useEffect, useState} from 'react'
import 'regenerator-runtime/runtime';
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce  } from 'react-table'
import { Button, FormControl, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material';
 
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
        <TextField 
          id="outlined-basic" 
          label="Search" 
          variant="outlined" 
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
            <TextField 
            id="outlined-basic" 
            label="Search" 
            variant="outlined" 
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
    <FormControl fullWidth>
      <Slider 
        aria-label="Volume" 
        valueLabelDisplay="auto"
        min={min}
        max={max+10}
        value={filterValue || min}
        onChange={(e: any) => 
          setFilter(parseInt(e.target?.value, 10))
        }
      />
      <Button variant="contained" onClick={() => setFilter(undefined)} >Off</Button>
    </FormControl>
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

  return (
    <>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Status"
        value={filterValue || ''} //without || '' there will be error that filterValue is undefined.
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <MenuItem value="">All</MenuItem>
        {options.map((option:any, i) => (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </>
  )
}
//END DROPDOWN FILTER

export default function Table() {
function customFilterFunction(rows:any, id:any, filterValue:any) {
  return rows.filter((row: { original: { col6: number; }; }) => row.original.col6 >= filterValue)
}
   const data = React.useMemo(
     () => [
       {colA: 'Hello',col2: 'World',col3: 13,col4: 'active',col5: 'up',col6: 3},
       {colA: 'react-table',col2: 'rocks',col3: 48,col4: 'inactive',col5: 'up',col6: 9},
       {colA: 'whatever',col2: 'you want',col3: 76,col4: 'active',col5: 'down',col6: 14},
       {colA: 'Ahatever',col2: 'you want',col3: 24,col4: 'inactive',col5: 'up',col6: 5},
     ],
     []
   )
   const options = React.useMemo(() => {
    const options = new Set()
      data.forEach((row:any) => {
        options.add(row.col4)
      })
      return [...Array.from(options.values())]
    }, [data])

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
            return <>Total {column.rows.reduce((sum:number, row:any) => parseInt(row.id) + sum, 0)}</>
          },
         Filter: ColumnFilter,
         disableSortBy: true
       },{
        Header: 'Number',
        accessor: 'col3',
        Footer: (column:any) => {
            return <>Total {column.rows.reduce((sum:number, row:any) => parseInt(row.id) + sum, 0)}</>
         },
        Filter: EqualFilter,
        filter: filterGreaterThan, //Can be a function or 'includes'or 'between'or 'equals'
        disableSortBy: true
      },{
        Header: 'Status',
        accessor: 'col4',
        Footer: (column:any) => {
            return <>Total {column.rows.reduce((sum:number, row:any) => parseInt(row.id) + sum, 0)}</>
         },
        Filter: DropdownFilter,
        filter: 'equals', 
        disableSortBy: true
      },{
        Header: 'Status2',
        accessor: 'col5',
        Footer: (column:any) => {
            return <>Total {column.rows.reduce((sum:number, row:any) => parseInt(row.id) + sum, 0)}</>
         },
        Filter: DropdownFilter,
        filter: 'equals', 
        disableSortBy: true
      },{
        Header: 'Outside',
        accessor: 'col6',
        Footer: (column:any) => {
            return <>Total {column.rows.reduce((sum:number, row:any) => parseInt(row.id) + sum, 0)}</>
         },
        Filter: true,
        filter: customFilterFunction, 
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
     setFilter,
     prepareRow,
   } = useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy)

   const { globalFilter } = state

   return (
       <>
       <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <Slider
        style={{width:"200px"}}
        size="small"
        aria-label="Small"
        max={20}
        onChange={(e:any) => {
          setFilter("col6", e.target.value);
        }}
      />
      <FormControl>
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Status"
        onChange={e => {
        }}
      >
        <MenuItem value="">All</MenuItem>
        {options.map((option:any, i) => (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      </FormControl>
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