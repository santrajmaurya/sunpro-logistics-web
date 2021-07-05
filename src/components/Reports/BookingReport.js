import { Row, Col, PageHeader  } from "antd";
import { observer } from "mobx-react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import "../style.scss";

const BookingReport = () => {

// const onGridReady = (params) => {
//   setGridApi(params.api);
// };

const columnDef = [
  { field: 'dateOfBooking', minWidth: 150},
  { field: 'bookingID', minWidth: 110 },
  { field: 'consignNo', minWidth: 110 },
  { field: 'nameOfConsignor', minWidth: 160 },
  { field: 'nameOfConsignee', minWidth: 160},
  { field: 'bookingType', minWidth: 120},
  { field: 'brokerName', minWidth: 120 },
  { field: 'vehicleNumber', minWidth: 140 },
  { field: 'from' },
  { field: 'to' },
  { field: 'bookingAmount', minWidth: 150},
  { field: 'lorryHired', minWidth: 110},
  { field: 'advancePaid', minWidth: 150},
  { field: 'dateOfAdvance', minWidth: 150},
  { field: 'balancePaid', minWidth: 130},
  { field: 'dateOfBalance', minWidth: 150},
  { field: 'mamul'},
  { field: 'challanNo', minWidth: 130},
  { field: 'remark '},
];

const rowData = [
    {id: 1, companyName: 'Abc', address: '6 a,short Street, Park Street', pin: '700016', city: 'Kolkata', state: 'West Bengal', country: 'India', officeNo: '03322478018', mobileNo: '5478214587', emailId: 'test@gmail.com', website: 'www.test.com', gstin: 'AGTBH435SKFF', cin: 'ASBCGDF', pan: 'DHJHH6543F', accountName: 'Test account'},
]

   return (
     <>
       <Row gutter={[12, 12]} sm={24} style={{ marginBottom: "18px" }}>
         <Col xs={24} sm={24} style={{ padding: 5 }}>
           <PageHeader title="Booking Report" />
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

export default observer(BookingReport);