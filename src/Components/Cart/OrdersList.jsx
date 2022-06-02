import React, { useContext, useState, useEffect } from "react";
import "./cartStyle.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductsContext } from "../Products/Context/ProductsContext";
import {
  Button as IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@material-ui/core";

const OrdersList = () => {
  const { userOrders, setUserOrders } = useContext(ProductsContext);
  const [paymentStatus, setPaymentStatus] = useState(10);

  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function subtotal() {
    console.log(userOrders);
    const total = userOrders.reduce((acc, item) => {
      return acc + item.totalCart;
    }, 0);
    return total;
  }

  const handleRemoveOrder = (id) => {
    let newOrdersArr = userOrders.filter(
      (item) => item.orderId !== id,
      console.log(id)
    );
    console.log(newOrdersArr);
    setUserOrders(newOrdersArr);
  };

  const handlePaymentChange = (event, updateItem) => {
    let updateOrder = { ...updateItem, payment: event.target.value };
    let itemIndex = userOrders.findIndex(
      (obj) => obj.orderId === updateItem.orderId
    );

    setUserOrders((prev) => [
      ...prev.slice(0, itemIndex),
      updateOrder,
      ...prev.slice(itemIndex + 1, prev.length),
    ]);
  };

  const handlePaymentClick = (id) => {
    console.log("test", paymentStatus);
  };
  // useEffect(() => {
  //   console.log(userOrders);
  // }, [userOrders]);

  const invoiceSubtotal = subtotal();

  return (
    <div className="orders__contant">
      <h2>Orders List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={1}>Order Id</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>User Email</TableCell>
              <TableCell colSpan={2}>Products</TableCell>
              <TableCell>Total Cart</TableCell>
              <TableCell>Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrders?.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell>
                  <IconButton onClick={() => handleRemoveOrder(order.orderId)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                  {order.orderId}
                </TableCell>
                <TableCell>{order.userName}</TableCell>
                <TableCell>{order.userEmail}</TableCell>
                <TableCell colSpan={2}>
                  {order.productsNameArr.map((product) => `${product} , \n `)}
                </TableCell>
                <TableCell>{order.totalCart}$</TableCell>
                <TableCell
                  className={
                    order.payment === "approved" ? "approved" : "waiting"
                  }
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Payment
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name={order.orederId}
                      value={order.payment}
                      label=""
                      onChange={(e) => handlePaymentChange(e, order)}
                    >
                      <MenuItem value={"waiting"}>Waiting</MenuItem>
                      <MenuItem value={"approved"}>Approved</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
            <div className="total__table">
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={3}>Subtotal</TableCell>
                <TableCell>{ccyFormat(invoiceSubtotal)}$</TableCell>
              </TableRow>
            </div>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersList;
