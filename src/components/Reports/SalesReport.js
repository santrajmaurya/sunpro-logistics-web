import { Row, Col, PageHeader  } from "antd";
import { observer } from "mobx-react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import "../style.scss";

const SalesReport = () => {

const columnDef = [
  { field: 'invoiceNo', minWidth: 110},
  { field: 'dateOfInvoice', minWidth: 140 },
  { field: 'consignNo', minWidth: 130},
  { field: 'customerName', minWidth: 150 },
  { field: 'gstinOfCustomer', minWidth: 160, headerName: 'GSTIN of Customer' },
  { field: 'amount', minWidth: 120 },
  { field: 'consignerName', minWidth: 140 },
  { field: 'BookingType', minWidth: 140 },
  { field: 'paymentStatus', minWidth: 140},
  { field: 'dateOfReceipt', minWidth: 150},
  { field: 'remarks', minWidth: 150},
  { field: 'TDS', headerName: 'TDS'},
];

const rowData = [
    {id: 1, companyName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF', cin: 'ASBCGDF', pan: 'DHJHH6543F', accountName: 'Test account'},
]

   return (
     <>
       <Row gutter={[12, 12]} sm={24} style={{ marginBottom: "18px" }}>
         <Col xs={24} sm={24} style={{ padding: 5 }}>
           <PageHeader title="Sales Report" />
         </Col>
       </Row>
       <div className="ag-theme-alpine" style={{ height: 507 }}>
         <AgGridReact
           rowData={rowData}
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

export default observer(SalesReport);