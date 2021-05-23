import { useState, useRef } from 'react';
import { Row, Col, Button, PageHeader  } from "antd";
import { observer } from "mobx-react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import AddDetailsModal from "./AddDetailsModal";

import "./style.scss";

const CompanyDetails = () => {
//    const [rowData, setRowData] = useState([]);
const [isAddCompanyModelOpen, setIsAddCompanyModelOpen] = useState(false);
   const gridRef = useRef(null);

//    useEffect(() => {
//        fetch('https://www.ag-grid.com/example-assets/row-data.json')
//            .then(result => result.json())
//            .then(rowData => setRowData(rowData))
//    }, []);

const closeModal = () => {
    setIsAddCompanyModelOpen(false);
  };

   const columnDef = [
    { field: 'companyName', minWidth: 180, checkboxSelection: true},
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
      {brokerName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF', cin: 'ASBCGDF', pan: 'DHJHH6543F', accountName: 'Test account'},
      {brokerName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF', cin: 'ASBCGDF', pan: 'DHJHH6543F', accountName: 'Test account'},
      {brokerName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF', cin: 'ASBCGDF', pan: 'DHJHH6543F', accountName: 'Test account'},
      {brokerName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF', cin: 'ASBCGDF', pan: 'DHJHH6543F', accountName: 'Test account'},
      {brokerName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF', cin: 'ASBCGDF', pan: 'DHJHH6543F', accountName: 'Test account'},
      {brokerName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF', cin: 'ASBCGDF', pan: 'DHJHH6543F', accountName: 'Test account'},
  ]

  const onButtonClick = e => {
      const selectedNodes = gridRef.current.api.getSelectedNodes()
      const selectedData = selectedNodes.map( node => node.data )
      const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }

   return (
     <>
      {isAddCompanyModelOpen && (
        <AddDetailsModal
          isModalVisible={isAddCompanyModelOpen}
          closeModal={closeModal}
          title="Add New Company"
          details={[
            { name: "companyName", label: "Company Name" },
            { name: "address", label: "Company Address", type: "textarea" },
            { name: "pin", label: "Pin", type: 'number', min: 6, max: 6 },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
            { name: "country", label: "Country" },
            { name: "officeNo", label: "Office No", type: 'number' },
            { name: "mobileNo", label: "Mobile No", type: "number", min: 6, max: 6 },
            { name: "emailId", label: "Email ID" },
            { name: "website", label: "website" },
            { name: "gstin", label: "GSTIN" },
            { name: "cin", label: "CIN" },
            { name: "pan", label: "PAN" },
            { name: "accountName", label: "Account Name" },
          ]}
        />
      )}
       <Row
         gutter={[12, 12]}
         sm={24}
         style={{ marginBottom: "18px" }}
       >
         <Col xs={24} sm={18} style={{ padding: 0 }}>
           <PageHeader
             title="Company Details"
           />
         </Col>
         <Col xs={24} sm={3}>
           <Button
             type="primary"
             style={{ cursor: "pointer", width: '100%' }}
             onClick={() => setIsAddCompanyModelOpen(true)}
           >
             Add New Company
           </Button>
         </Col>
         <Col xs={24} sm={3}>
           <Button
             type="primary"
             style={{ cursor: "pointer", width: '100%'}}
             onClick={onButtonClick}
           >
             Get selected rows
           </Button>
         </Col>
       </Row>
       <div className="ag-theme-alpine" style={{ height: 507 }}>
         <AgGridReact
           ref={gridRef}
           rowData={rowData}
        //    rowSelection="multiple"
           defaultColDef={{
             initialWidth: 100,
             sortable: true,
             resizable: true,
           }}
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