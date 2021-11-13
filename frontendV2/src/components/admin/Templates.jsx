import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
// import Card from "./ui/Card";
// import classes from "./styles/style.module.scss";

function Templates({ history }) {
  const dispatch = useDispatch();
  const { templates } = useSelector((state) => state.templates);
  console.log(templates);
  const setProducts = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
        },
      ],
      rows: [],
    };

    // products.forEach((product) => {
    //   data.rows.push({
    //     id: product._id,
    //     name: product.name,
    //     price: `$${product.price}`,
    //     stock: product.stock,
    //     actions: (
    //       <Fragment>
    //         <Link
    //           to={`/admin/template/${product._id}`}
    //           className="btn btn-primary py-1 px-2"
    //         >
    //           <i className="fa fa-pencil"></i>
    //         </Link>
    //       </Fragment>
    //     ),
    //   });
    // });

    return data;
  };

  return (
    <>
      <Helmet>
        <title>Shopit|Admin Templates</title>
      </Helmet>
      <h2>Templates</h2>
      <MDBDataTable
        data={setProducts()}
        className="px-3"
        bordered
        striped
        hover
      />
    </>
  );
}

export default Templates;
