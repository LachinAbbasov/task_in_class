import React from 'react';
import { Table, Button } from 'antd';
import { useEffect, useState } from "react";
import controller from "../src/Data/index";
import { endpoints } from "../src/Data/constants";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = () => {
  const [orders, setOrders] = useState([]);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Customer Id',
      dataIndex: 'customerId',
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      sorter: {
        compare: (a, b) => a.orderDate - b.orderDate,
        multiple: 3,
      },
    },
    {
      title: 'Ship Via',
      dataIndex: 'shipVia',
      sorter: {
        compare: (a, b) => a.shipVia - b.shipVia,
        multiple: 2,
      },
    },
    {
      title: "Delete",
      render: (record) => {

        return (
          <Button
            type="primary"
            danger
            key={record.id}
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  console.log(record.id);
                  controller.delete(endpoints.orders, record.id);
                  setOrders((orders) => {
                    return orders.filter((x) => x.id != record.id);
                  });
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              });
            }}
          >
            delete
          </Button>
        );
      },
    },


  ];

  const getOrders = () => {
    controller.getAll(endpoints.orders)
      .then((res) => { setOrders([...res.data]) });
  }
  useEffect(() => {
    getOrders()
  }, []);

  return (
    <Table columns={columns} dataSource={orders} onChange={onChange} />
  )


}




export default App;