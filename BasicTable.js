import React, {useMemo} from 'react'
import{useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'

export const BasicTable = () =>{

    const columns = useMemo(()=> COLUMNS,[])
    const data = useMemo(()=>MOCK_DATA,[])

    const tableInstance=useTable({
        columns,
        data
    })
    const{
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    }=tableInstance
    
    return{...getTableProps}(
         <table{...getTableProps()}>
             <thead>
                 {
                     headerGroups.map((headerGroup)=>(
                        <tr{...headerGroup.getHeaderGroupProps()}>
                        {}
                     <th>

                     </th>

                 </tr>
                     ))
                 }
                 

             </thead>

             <tbody{...getTableBodyProps()}>
                 <tr>
                     <td>

                     </td>

                 </tr>

             </tbody>
         </table>

    
    )
}