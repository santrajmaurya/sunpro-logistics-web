import { useState, useRef } from 'react';
import { Row, Col, Button, PageHeader, message  } from "antd";
import { observer } from "mobx-react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import "./style.scss";

const CompanyDetails = () => {
const [editType, setEditType] = useState('');
const [rowSelect, setRowSelect] = useState(false);
const [gridApi, setGridApi] = useState(null);
const [selectedRow, setSelectedRow] = useState({});
const [editingRowIndex, setEditingRowIndex] = useState('');
const gridRef = useRef(null);

const onGridReady = (params) => {
  setGridApi(params.api);
};

const columnDef = [
  { field: "id", editable: false, checkboxSelection: true },
  { field: 'companyName', minWidth: 180},
  { field: 'address', minWidth: 180 },
  { field: 'pin' },
  { field: 'city' },
  { field: 'state'},
  { field: 'country'},
  { field: 'officeNo' },
  { field: 'mobileNo', minWidth: 150 },
  { field: 'emailId' },
  { field: 'website' },
  { field: 'gstin', headerName: 'GSTIN' },
  { field: 'cin', headerName: 'CIN' },
  { field: 'pan', headerName: 'PAN' },
  { field: 'accountName', headerName: 'Account Name' },
];

const rowData = [
    {id: 1, companyName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF', cin: 'ASBCGDF', pan: 'DHJHH6543F', accountName: 'Test account'},
]


const editSelectedRow = () => {
  const colId = selectedRow.columnApi ? selectedRow.columnApi.getDisplayedCenterColumns()[0].colId : '';
  if (selectedRow.rowIndex === undefined) {
    message.warning("Please select any row to edit");
  } else {
    setRowSelect(true);
    gridApi.startEditingCell({
      rowIndex: selectedRow.rowIndex,
      colKey: colId,
    });
  }
};

const cancelEdit = () => {
  gridApi.stopEditing();
  setRowSelect(false);
};

const updateRow = () => {
  gridApi.stopEditing();
  setRowSelect(false);
};

const onSelectionChanged = (e) => {
 if(editingRowIndex !== e.rowIndex) {
  setSelectedRow(e);
  setEditingRowIndex(e.rowIndex);
 }
  gridApi.stopEditing();
  setRowSelect(false);
  setEditType("fullRow");
};

   return (
     <>
       <Row gutter={[12, 12]} sm={24} style={{ marginBottom: "18px" }}>
         <Col xs={24} sm={21} style={{ padding: 0 }}>
           <PageHeader title="Company Details" />
         </Col>
         {rowSelect === false && (
           <>
             <Col xs={24} sm={3}>
               <Button
                 type="primary"
                 style={{
                   cursor: "pointer",
                   width: "100%",
                   background: "#8f8f55",
                   borderColor: "#8f8f55",
                 }}
                 onClick={editSelectedRow}
               >
                 Edit
               </Button>
             </Col>
           </>
         )}

         {rowSelect && (
           <>
             <Col xs={24} sm={3}>
               <Button
                 type="primary"
                 style={{
                   cursor: "pointer",
                   width: "100%",
                   background: "green",
                   borderColor: "green",
                 }}
                 onClick={updateRow}
               >
                 Update
               </Button>
             </Col>
             <Col xs={24} sm={3}>
               <Button
                 type="primary"
                 danger
                 style={{ cursor: "pointer", width: "100%" }}
                 onClick={cancelEdit}
               >
                 Cancel
               </Button>
             </Col>
           </>
         )}
       </Row>
       <div className="ag-theme-alpine" style={{ height: 507 }}>
         <AgGridReact
           ref={gridRef}
           rowData={rowData}
           editType={editType}
           onRowSelected={onSelectionChanged}
           defaultColDef={{
             initialWidth: 100,
             sortable: true,
             resizable: true,
             editable: true,
           }}
           onGridReady={onGridReady}
         >
           {columnDef.map((columnDef) => (
             <AgGridColumn {...columnDef} key={columnDef.field} />
           ))}
         </AgGridReact>
       </div>
     </>
   );
};

export default observer(CompanyDetails);