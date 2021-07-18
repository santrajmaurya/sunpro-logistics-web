import { useState, useRef } from 'react';
import { Row, Col, Button, PageHeader, message  } from "antd";
import { observer } from "mobx-react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import AddDetailsModal from "./AddDetailsModal";

import "./style.scss";

const ConsignorDetails = () => {
const [editType, setEditType] = useState('');
const [rowSelect, setRowSelect] = useState(false);
const [gridApi, setGridApi] = useState(null);
const [selectedRow, setSelectedRow] = useState({});
const [editingRowIndex, setEditingRowIndex] = useState('');
const [isAddConsignorModelOpen, setIsAddConsignorModelOpen] = useState(false);
const gridRef = useRef(null);

//    useEffect(() => {
//        fetch('https://www.ag-grid.com/example-assets/row-data.json')
//            .then(result => result.json())
//            .then(rowData => setRowData(rowData))
//    }, []);

const onGridReady = (params) => {
  setGridApi(params.api);
};

const closeModal = () => {
  setIsAddConsignorModelOpen(false);
};

const columnDef = [
  { field: "id", editable: false, checkboxSelection: true },
  { field: "consignorName", minWidth: 180 },
  { field: "address", minWidth: 180 },
  { field: "pin" },
  { field: "city" },
  { field: "state" },
  { field: "country" },
  { field: "officeNo" },
  { field: "mobileNo", minWidth: 150 },
  { field: "emailId" },
  { field: "website" },
  { field: "gstin", headerName: "GSTIN" },
];

const rowData = [ 
  {id: 1, consignorName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF'},
  {id: 2, consignorName: 'xyz', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF'},
  {id: 3, consignorName: 'Test', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF'},
  {id: 4, consignorName: 'mno', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF'},
  {id: 5, consignorName: 'kjy', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF'},
  {id: 6,consignorName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF'},
];


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
       {isAddConsignorModelOpen && (
         <AddDetailsModal
           isModalVisible={isAddConsignorModelOpen}
           closeModal={closeModal}
           title="Add New Consignor"
           details={[
             { name: "consignorName", label: "Consignor Name" },
             { name: "address", label: "Consignor Address", type: "textarea" },
             { name: "pin", label: "Pin", type: "number", min: 6, max: 6 },
             { name: "city", label: "City" },
             { name: "state", label: "State" },
             { name: "country", label: "Country" },
             { name: "officeNo", label: "Office No", type: "number" },
             {
               name: "mobileNo",
               label: "Mobile No",
               type: "number",
               min: 6,
               max: 6,
             },
             { name: "emailId", label: "Email ID" },
             { name: "website", label: "website" },
             { name: "gstin", label: "GSTIN" },
           ]}
         />
       )}
       <Row gutter={[12, 12]} sm={24} style={{ marginBottom: "18px" }}>
         <Col xs={24} sm={18} style={{ padding: 0 }}>
           <PageHeader title="Consignor Details" />
         </Col>
         {rowSelect === false && (
           <>
             <Col xs={24} sm={3}>
               <Button
                 type="primary"
                 style={{ cursor: "pointer", width: "100%", borderColor:'#20295c', background: '#20295c'  }}
                 onClick={() => setIsAddConsignorModelOpen(true)}
               >
                 Add New Consignor
               </Button>
             </Col>
             <Col xs={24} sm={3}>
               <Button
                 type="primary"
                 style={{
                   cursor: "pointer",
                   width: "100%",
                   background: "#e36d25",
                   borderColor: "#e36d25",
                 }}
                 onClick={editSelectedRow}
               >
                 Edit Selected Row
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

export default observer(ConsignorDetails);